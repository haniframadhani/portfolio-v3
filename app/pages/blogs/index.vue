<script setup lang="ts">
  import Blog from "~/components/card/Blog.vue";
  import type { Database } from "~/types/database.types";

  const client = useSupabaseClient<Database>();
  const currentPage = ref(1);
  const postPerPage = ref(10);
  const { data } = await useAsyncData(
    `blogs-${currentPage.value}`,
    async () => {
      const { data, count, error } = await client
        .from("blogs")
        .select("*", { count: "exact" })
        .order("created_at", { ascending: false })
        .range(
          (currentPage.value - 1) * postPerPage.value,
          currentPage.value * postPerPage.value - 1
        );
      if (error) throw error;
      return { blogs: data ?? [], count: count ?? 0 };
    },
    {
      watch: [currentPage],
    }
  );
  const blogs = computed(() => data.value?.blogs ?? []);
  const totalCount = computed(() => data.value?.count ?? 0);

  function to(page: number) {
    return {
      query: { page },
    };
  }
</script>

<template>
  <UContainer>
    <h2 class="font-display font-bold text-3xl md:text-4xl mb-12">Here some of my insights</h2>
    <div v-if="blogs && blogs.length > 0">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <NuxtLink v-for="blog in blogs" :key="blog.id" :to="`/blogs/${blog.id}`">
          <Blog :title="blog.title" :thumbnail="blog.thumbnail" :excerpt="blog.excerpt" />
        </NuxtLink>
      </div>
      <UPagination
        v-model:page="currentPage"
        :to="to"
        :items-per-page="postPerPage"
        :total="totalCount"
        class="justify-items-center" />
    </div>
    <div v-else class="col-span-2 text-center py-8">
      <p class="text-gray-500">No blogs found</p>
    </div>
  </UContainer>
</template>

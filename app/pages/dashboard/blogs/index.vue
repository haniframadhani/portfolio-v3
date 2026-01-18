<script setup lang="ts">
  import type { Database } from "~/types/database.types";
  import Blog from "~/components/card/Blog.vue";

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
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar>
        <template #right>
          <NuxtLink to="/dashboard/blogs/create">
            <UButton color="secondary" class="text-white capitalize">add blog</UButton>
          </NuxtLink>
        </template>
      </UDashboardNavbar>
    </template>
    <template #body>
      <div v-if="blogs && blogs.length > 0">
        <div class="grid gap-6 grid-cols-2 mb-6">
          <NuxtLink v-for="blog in blogs" :key="blog.id" :to="`blogs/update/${blog.id}`">
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
    </template>
  </UDashboardPanel>
</template>

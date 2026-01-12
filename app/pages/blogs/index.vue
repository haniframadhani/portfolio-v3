<script setup lang="ts">
  import Blog from "~/components/card/Blog.vue";
  import type { Database } from "~/types/database.types";

  type Blogs = Database["public"]["Tables"]["blogs"]["Row"];

  const client = useSupabaseClient();
  const { data: blogs } = await useAsyncData<Blogs[]>("blogs", async () => {
    const { data, error } = await client
      .from("blogs")
      .select()
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data || [];
  });
</script>

<template>
  <UContainer>
    <h2 class="font-display font-bold text-3xl md:text-4xl mb-12">Here some of my insights</h2>
    <div v-if="blogs && blogs.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <NuxtLink v-for="blog in blogs" :key="blog.id" :to="`/blogs/${blog.id}`">
        <Blog :title="blog.title" :thumbnail="blog.thumbnail" :excerpt="blog.excerpt" />
      </NuxtLink>
    </div>
    <div v-else class="col-span-2 text-center py-8">
      <p class="text-gray-500">No blogs found</p>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
  import type { Database } from "~/types/database.types";
  import Blog from "~/components/card/Blog.vue";

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
      <div v-if="blogs && blogs.length > 0" class="grid gap-6 grid-cols-2">
        <NuxtLink v-for="blog in blogs" :key="blog.id" :to="`blogs/update/${blog.id}`">
          <Blog :title="blog.title" :thumbnail="blog.thumbnail" :excerpt="blog.excerpt" />
        </NuxtLink>
      </div>
      <div v-else class="col-span-2 text-center py-8">
        <p class="text-gray-500">No blogs found</p>
      </div>
    </template>
  </UDashboardPanel>
</template>

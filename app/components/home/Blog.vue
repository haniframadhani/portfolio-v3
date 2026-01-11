<script setup lang="ts">
  import type { Database } from "~/types/database.types";
  import Blog from "../card/Blog.vue";
  type Blogs = Database["public"]["Tables"]["projects"]["Row"];
  defineProps<{ blogs: Blogs[] }>();
</script>

<template>
  <section id="blog" class="my-16">
    <h2 class="font-display font-bold text-3xl md:text-4xl mb-12">Some of my insight</h2>
    <div v-if="blogs && blogs.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <NuxtLink v-for="blog in blogs" :key="blog.id" :to="`/blogs/${blog.id}`">
        <Blog :title="blog.title" :thumbnail="blog.thumbnail" :excerpt="blog.excerpt" />
      </NuxtLink>
    </div>
    <div v-else class="col-span-2 text-center py-8">
      <p class="text-gray-500">No blogs found</p>
    </div>
    <NuxtLink to="/blogs" class="block text-center underline">More of my insight</NuxtLink>
  </section>
</template>

<script setup lang="ts">
  import Blog from "../card/Blog.vue";
</script>

<template>
  <section id="blog" class="my-16">
    <h2 class="font-display font-bold text-3xl md:text-4xl mb-12">Some of my insight</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <Blog />
      <Blog />
    </div>
    <NuxtLink to="#" class="block text-center underline">More of my insight</NuxtLink>
  </section>
</template>

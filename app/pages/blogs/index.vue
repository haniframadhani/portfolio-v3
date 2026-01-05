<script setup lang="ts">
  import Blog from "~/components/card/Blog.vue";
</script>

<template>
  <UContainer>
    <h2 class="font-display font-bold text-3xl md:text-4xl mb-12">Here some of my insights</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </div>
  </UContainer>
</template>

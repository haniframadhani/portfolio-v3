<script setup lang="ts">
  defineProps<{
    title: string;
    thumbnail: string;
    excerpt: string;
  }>();
</script>
<template>
  <UCard variant="soft" class="hover:shadow-lg hover:shadow-secondary-800 duration-300">
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <h3 class="font-bold font-display text-3xl mb-4">{{ title }}</h3>
        <p class="text-lg mb-8 line-clamp-4">
          {{ excerpt }}
        </p>
        <span class="text-sm">View the process</span>
      </div>
      <NuxtImg
        :alt="title"
        :src="thumbnail"
        class="size-full aspect-square object-cover rounded-md overflow-hidden order-first md:order-last" />
    </div>
  </UCard>
</template>

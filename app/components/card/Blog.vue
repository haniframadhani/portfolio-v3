<script setup lang="ts">
  defineProps<{
    title: string;
    thumbnail: string;
    excerpt: string;
  }>();
</script>
<template>
  <UCard variant="soft" class="hover:shadow-lg hover:shadow-secondary-800 duration-300">
    <div class="grid grid-cols-1 gap-8">
      <NuxtImg
        :alt="title"
        :src="thumbnail"
        class="size-full aspect-4/3 object-cover rounded-md overflow-hidden" />
      <div class="grid gap-2">
        <h3 class="font-display font-bold text-3xl">{{ title }}</h3>
        <p class="line-clamp-2">
          {{ excerpt }}
        </p>
      </div>
    </div>
  </UCard>
</template>

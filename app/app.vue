<script setup lang="ts">
  useHead({
    htmlAttrs: {
      class: "scroll-smooth",
    },
  });
</script>

<template>
  <UApp>
    <!-- <Toaster> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- </Toaster> -->
  </UApp>
</template>

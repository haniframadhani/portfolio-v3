<script setup lang="ts">
  import AppFooter from "~/components/AppFooter.vue";
  import AppNavbar from "~/components/AppNavbar.vue";
</script>

<template>
  <div>
    <AppNavbar />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style>
  body {
    background-color: var(--color-primary-950);
    color: white;
  }
</style>

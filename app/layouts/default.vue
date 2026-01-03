<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
</script>

<template>
  <Navbar />
  <main class="-mt-(--ui-header-height)">
    <slot />
  </main>
  <Footer />
</template>

<style>
body {
  background-color: var(--color-primary-950);
  color: white;
}
</style>

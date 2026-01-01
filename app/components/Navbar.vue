<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Projects",
    to: "#projects",
    active: route.path.startsWith("/projects"),
  },
  {
    label: "Blog",
    to: "/blog",
    active: route.path.startsWith("/blog"),
  },
  {
    label: "About",
    to: "#about",
    active: route.path === "#about",
  },
]);
</script>

<template>
  <UHeader title="Hanif" to="/" :ui="{ title: `font-display` }">
    <template #right>
      <UNavigationMenu :items="items" class="hidden md:flex" />
    </template>
    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" />
    </template>
  </UHeader>
</template>

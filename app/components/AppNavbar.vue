<script setup lang="ts">
  import type { NavigationMenuItem } from "@nuxt/ui";

  const route = useRoute();

  const items = computed<NavigationMenuItem[]>(() => [
    {
      label: "Home",
      to: "/#home",
      active: route.hash === "#home" || (route.path === "/" && !route.hash),
    },
    {
      label: "Projects",
      to: "/#project",
      active: route.hash === "#project" || route.path.startsWith("/projects"),
    },
    {
      label: "Blog",
      to: "/blog",
      active: route.hash === "#blog" || route.path.startsWith("/blog"),
    },
    {
      label: "Skills",
      to: "/#skill",
      active: route.hash === "#skill",
    },
    {
      label: "About",
      to: "/#about",
      active: route.hash === "#about",
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

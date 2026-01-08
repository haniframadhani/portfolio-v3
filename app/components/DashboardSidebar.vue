<script setup lang="ts">
  import type { NavigationMenuItem } from "@nuxt/ui";
  const route = useRoute();
  const items = computed<NavigationMenuItem[]>(() => [
    {
      label: "home",
      icon: "i-lucide-home",
      to: "/dashboard",
      active: route.path === "/dashboard" || route.path === "/dashboard/",
    },
    {
      label: "projects",
      icon: "i-lucide-file-diff",
      to: "/dashboard/projects",
      active: route.path === "/dashboard/projects" || route.path === "/dashboard/projects/",
    },
    {
      label: "blogs",
      icon: "i-lucide-book-open-text",
      to: "/dashboard/blogs",
      active: route.path === "/dashboard/blogs" || route.path === "/dashboard/blogs/",
    },
    {
      label: "about",
      icon: "i-lucide-user",
      to: "/dashboard/about",
      active: route.path === "/dashboard/about" || route.path === "/dashboard/about/",
    },
    {
      label: "settings",
      icon: "i-lucide-settings",
      to: "/dashboard/settings",
      active: route.path === "/dashboard/settings" || route.path === "/dashboard/settings/",
    },
  ]);
  const client = useSupabaseClient();
  const router = useRouter();

  async function logout() {
    try {
      const { error } = await client.auth.signOut();
      if (error) throw error;
      router.push("/dashboard/signin");
    } catch (error) {
      console.log(error); // eslint-disable-line no-console
    }
  }
</script>
<template>
  <UDashboardSidebar collapsible resizable :ui="{ footer: 'border-t border-default' }">
    <template #header>
      <div class="font-display font-bold">Dashboard</div>
    </template>
    <template #default>
      <UNavigationMenu :items="items" orientation="vertical" />
    </template>
    <template #footer>
      <UButton icon="i-lucide-log-out" class="w-full" color="error" @click="logout">logout</UButton>
    </template>
  </UDashboardSidebar>
</template>

<script setup lang="ts">
  import DashboardSidebar from "~/components/DashboardSidebar.vue";
</script>
<template>
  <UDashboardGroup>
    <UDashboardSidebarToggle />
    <DashboardSidebar />
    <slot />
  </UDashboardGroup>
</template>

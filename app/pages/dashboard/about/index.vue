<script setup lang="ts">
  import type { Database } from "~/types/database.types";

  type About = Database["public"]["Tables"]["about"]["Row"];

  const client = useSupabaseClient<About>();
  const { data: about } = await useAsyncData<About>("about", async () => {
    const { data, error } = await client.from("about").select().single();

    if (error) throw error;
    return data;
  });
</script>
<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar>
        <template #right>
          <NuxtLink to="/dashboard/about/update">
            <UButton color="secondary" class="text-white capitalize">update about</UButton>
          </NuxtLink>
        </template>
      </UDashboardNavbar>
    </template>
    <template #body>
      <MDC v-if="about?.content" :value="about.content" />
    </template>
  </UDashboardPanel>
</template>

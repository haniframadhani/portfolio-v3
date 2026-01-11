<script setup lang="ts">
  import type { Database } from "~/types/database.types";
  import Project from "~/components/card/Project.vue";

  type Projects = Database["public"]["Tables"]["projects"]["Row"];

  const client = useSupabaseClient();
  const { data: projects } = await useAsyncData<Projects[]>("projects", async () => {
    const { data, error } = await client
      .from("projects")
      .select()
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data || [];
  });
</script>
<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar>
        <template #right>
          <NuxtLink to="#">
            <UButton color="secondary" class="text-white capitalize">add project</UButton>
          </NuxtLink>
        </template>
      </UDashboardNavbar>
    </template>
    <template #body>
      <div v-if="projects && projects.length > 0" class="grid gap-6 grid-cols-2">
        <NuxtLink v-for="project in projects" :key="project.id" to="#">
          <Project
            :title="project.title"
            :thumbnail="project.thumbnail"
            :excerpt="project.excerpt" />
        </NuxtLink>
      </div>
      <div v-else class="col-span-2 text-center py-8">
        <p class="text-gray-500">No project found</p>
      </div>
    </template>
  </UDashboardPanel>
</template>

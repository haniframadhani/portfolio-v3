<script setup lang="ts">
  import type { Database } from "~/types/database.types";
  import Project from "~/components/card/Project.vue";

  const client = useSupabaseClient<Database>();
  const currentPage = ref(1);
  const postPerPage = ref(10);
  const { data } = await useAsyncData(
    `projects-${currentPage.value}`,
    async () => {
      const { data, count, error } = await client
        .from("projects")
        .select("*", { count: "exact" })
        .order("created_at", { ascending: false })
        .range(
          (currentPage.value - 1) * postPerPage.value,
          currentPage.value * postPerPage.value - 1
        );
      if (error) throw error;
      return { projects: data ?? [], count: count ?? 0 };
    },
    {
      watch: [currentPage],
    }
  );

  const projects = computed(() => data.value?.projects ?? []);
  const totalCount = computed(() => data.value?.count ?? 0);

  function to(page: number) {
    return {
      query: { page },
    };
  }
</script>
<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar>
        <template #right>
          <NuxtLink to="/dashboard/projects/create">
            <UButton color="secondary" class="text-white capitalize">add project</UButton>
          </NuxtLink>
        </template>
      </UDashboardNavbar>
    </template>
    <template #body>
      <div v-if="projects && projects.length > 0">
        <div class="grid gap-6 grid-cols-2 mb-6">
          <NuxtLink
            v-for="project in projects"
            :key="project.id"
            :to="`/dashboard/projects/update/${project.id}`">
            <Project
              :title="project.title"
              :thumbnail="project.thumbnail"
              :excerpt="project.excerpt" />
          </NuxtLink>
        </div>
        <UPagination
          v-model:page="currentPage"
          :to="to"
          :items-per-page="postPerPage"
          :total="totalCount"
          class="justify-items-center" />
      </div>
      <div v-else class="col-span-2 text-center py-8">
        <p class="text-gray-500">No project found</p>
      </div>
    </template>
  </UDashboardPanel>
</template>

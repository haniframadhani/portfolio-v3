<script setup lang="ts">
  import type { Database } from "~/types/database.types";
  type Projects = Database["public"]["Tables"]["projects"]["Row"];
  const client = useSupabaseClient();
  const route = useRoute();
  const { data: project, error } = await useAsyncData<Projects>(
    `project-${route.params.id}`,
    async () => {
      const { data, error } = await client
        .from("projects")
        .select()
        .eq("id", route.params.id as string)
        .single();
      if (error) throw error;
      return data;
    }
  );
  if (error.value || !project.value) {
    throw createError({
      status: 404,
      statusMessage: "Project not found",
      message: "Project you are looking for is not exist",
      fatal: true,
    });
  }
</script>
<template>
  <UContainer>
    <MDC v-if="project?.content" :value="project.content" />
    <div v-else>No content available</div>
  </UContainer>
</template>

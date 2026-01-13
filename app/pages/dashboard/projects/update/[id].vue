<script setup lang="ts">
  import type { Database } from "~/types/database.types";
  import { getRowDetail } from "~/composables/getRowDetail";
  import { LazyDeleteModalCofirm } from "#components";

  const route = useRoute();
  const router = useRouter();
  const toast = useToast();
  const overlay = useOverlay();
  const modal = overlay.create(LazyDeleteModalCofirm);

  type Projects = Database["public"]["Tables"]["projects"]["Row"];

  const { data: project, error } = await useAsyncData<Projects>(`project-${route.params.id}`, () =>
    getRowDetail("projects", route.params.id as string)
  );

  if (error.value || !project.value) {
    throw createError({
      status: 404,
      statusMessage: "Project not found",
      message: "Project you are looking for is not exist",
      fatal: true,
    });
  }
  const onDelete = async () => {
    if (!project.value) {
      toast.add({ title: "Data is empty", color: "error" });
      return;
    }

    const instance = modal.open({ type: "project" });

    const confirmed = await instance.result;

    if (!confirmed) return;

    try {
      const filePath = getSingleFilePath(project.value.title);
      await deleteFromTable("projects", project.value.id);
      await deleteFile([filePath]);
      router.push("/dashboard/projects");
      toast.add({ title: "Project deleted successfully", color: "success" });
    } catch (error) {
      toast.add({ title: (error as Error).message, color: "error" });
    }
  };
</script>
<template>
  <UDashboardPanel>
    <template #body>
      <p>{{ project?.title }}</p>
      <UButton color="error" @click="onDelete">delete</UButton>
    </template>
  </UDashboardPanel>
</template>

<script setup lang="ts">
  import type { Database } from "~/types/database.types";
  import { getRowDetail } from "~/composables/getRowDetail";
  import { LazyDeleteModalCofirm } from "#components";

  const route = useRoute();
  const router = useRouter();
  const toast = useToast();
  const overlay = useOverlay();
  const modal = overlay.create(LazyDeleteModalCofirm);
  type Blogs = Database["public"]["Tables"]["blogs"]["Row"];

  const { data: blog, error } = await useAsyncData<Blogs>(`blog-${route.params.id}`, () =>
    getRowDetail("blogs", route.params.id as string)
  );

  if (error.value || !blog.value) {
    throw createError({
      status: 404,
      statusMessage: "Blog not found",
      message: "Blog you are looking for is not exist",
      fatal: true,
    });
  }

  const onDelete = async () => {
    if (!blog.value) {
      toast.add({ title: "Data is empty", color: "error" });
      return;
    }

    const instance = modal.open({ type: "blog" });

    const confirmed = await instance.result;

    if (!confirmed) return;

    try {
      const filePath = getSingleFilePath(blog.value.title);
      await deleteFromTable("blogs", blog.value.id);
      await deleteFile([filePath]);
      router.push("/dashboard/blogs");
      toast.add({ title: "Blog deleted successfully", color: "success" });
    } catch (error) {
      toast.add({ title: (error as Error).message, color: "error" });
    }
  };
</script>
<template>
  <UDashboardPanel>
    <template #body>
      <p>{{ blog?.title }}</p>
      <UButton color="error" @click="onDelete">delete</UButton>
    </template>
  </UDashboardPanel>
</template>

<script setup lang="ts">
  import type { FormSubmitEvent } from "@nuxt/ui";
  import type { Database } from "~/types/database.types";
  import FormEditor from "~/components/form/FormEditor.vue";
  import FormTitle from "~/components/form/FormTitle.vue";
  import FormExcerpt from "~/components/form/FormExcerpt.vue";
  import FormImageUpload from "~/components/form/FormImageUpload.vue";
  import { getRowDetail } from "~/composables/getRowDetail";
  import { LazyDeleteModalConfirm } from "#components";
  import {
    updateProjectAndBlogSchema,
    type UpdateProjectAndBlogForm,
  } from "~/schemas/projectAndBlog.schema";
  import { getSingleFilePath } from "~/composables/getSingleFilePath";
  import { deleteFromTable } from "~/composables/deleteFromTable";
  import { deleteFile } from "~/composables/deleteFile";
  import { updateTable } from "~/composables/updateTable";

  const route = useRoute();
  const router = useRouter();
  const toast = useToast();
  const overlay = useOverlay();
  const modal = overlay.create(LazyDeleteModalConfirm);
  const MAX_TITLE_LENGTH = 255;
  const schema = updateProjectAndBlogSchema;
  const state = ref({
    thumbnail: undefined as File | undefined,
    title: "",
    excerpt: "",
    content: undefined as string | undefined,
  });

  type Blogs = Database["public"]["Tables"]["blogs"]["Row"];
  type Schema = UpdateProjectAndBlogForm;

  const { data: blog, error } = await useAsyncData<Blogs>(`blog-${route.params.id}`, () =>
    getRowDetail("blogs", route.params.id as string)
  );

  if (blog.value) {
    state.value.title = blog.value.title;
    state.value.excerpt = blog.value.excerpt;
    state.value.content = blog.value.content;
  }

  if (error.value || !blog.value) {
    throw createError({
      status: 404,
      statusMessage: "Blog not found",
      message: "Blog you are looking for is not exist",
      fatal: true,
    });
  }

  const onUpdate = async (event: FormSubmitEvent<Schema>) => {
    if (!blog.value) {
      toast.add({ title: "Data is empty", color: "error" });
      return;
    }
    try {
      const { thumbnail, title, excerpt, content } = event.data;
      let thumbnailUrl = blog.value.thumbnail;
      if (thumbnail) {
        thumbnailUrl = await uploadThumbnail("blogs", thumbnail);
        const filePath = getSingleFilePath(blog.value.thumbnail);
        await deleteFile([filePath]);
      }
      await updateTable("blogs", blog.value.id, {
        thumbnail: thumbnailUrl,
        title,
        excerpt,
        content,
      });
      router.push("/dashboard/blogs");
      toast.add({ title: "Success update blog", color: "success" });
    } catch (error) {
      toast.add({ title: (error as Error).message, color: "error" });
    }
  };

  const onDelete = async () => {
    if (!blog.value) {
      toast.add({ title: "Data is empty", color: "error" });
      return;
    }

    const instance = modal.open({ type: "blog" });

    const confirmed = await instance.result;

    if (!confirmed) return;

    try {
      const filePath = getSingleFilePath(blog.value.thumbnail);
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
      <UForm :state="state" :schema="schema" class="space-y-4" @submit="onUpdate">
        <NuxtImg
          v-show="!state.thumbnail"
          :alt="blog?.title"
          :src="blog?.thumbnail"
          class="aspect-video object-cover rounded-md overflow-hidden h-84" />
        <FormImageUpload v-model="state.thumbnail" />
        <FormTitle v-model="state.title" :max-length="MAX_TITLE_LENGTH" />
        <FormExcerpt v-model="state.excerpt" />
        <FormEditor v-model="state.content" />
        <div class="flex gap-2">
          <UButton type="submit" color="secondary" loading-auto>update</UButton>
          <UButton color="error" @click="onDelete">delete</UButton>
        </div>
      </UForm>
    </template>
  </UDashboardPanel>
</template>

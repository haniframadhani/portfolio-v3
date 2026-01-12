<script setup lang="ts">
  import type { FormSubmitEvent } from "@nuxt/ui";
  import FormEditor from "~/components/form/FormEditor.vue";
  import FormTitle from "~/components/form/FormTitle.vue";
  import FormExcerpt from "~/components/form/FormExcerpt.vue";
  import FormImageUpload from "~/components/form/FormImageUpload.vue";
  import { uploadThumbnail } from "~/composables/uploadThumbnail";
  import { insertIntoTable } from "~/composables/insertIntoTable";
  import { projectAndBlogSchema, type ProjectAndBlogForm } from "~/schemas/projectAndBlog.schema";
  const toast = useToast();
  const router = useRouter();
  const MAX_TITLE_LENGTH = 255;
  const state = ref({
    thumbnail: undefined as File | undefined,
    title: "",
    excerpt: "",
    content: undefined as string | undefined,
  });

  const schema = projectAndBlogSchema;

  type Schema = ProjectAndBlogForm;

  async function onSubmit(event: FormSubmitEvent<Schema>) {
    try {
      const { thumbnail, title, excerpt, content } = event.data;
      const thumbnailUrl = await uploadThumbnail("projects", thumbnail);
      await insertIntoTable("projects", { title, excerpt, content, thumbnail: thumbnailUrl });
      router.push("/dashboard/projects");
      toast.add({ title: "Success create project", color: "success" });
    } catch (error) {
      toast.add({ title: (error as Error).message, color: "error" });
    }
  }
</script>

<template>
  <UDashboardPanel>
    <template #body>
      <UForm :state="state" :schema="schema" class="space-y-4" @submit="onSubmit">
        <FormImageUpload v-model="state.thumbnail" />
        <FormTitle v-model="state.title" :max-length="MAX_TITLE_LENGTH" />
        <FormExcerpt v-model="state.excerpt" />
        <FormEditor v-model="state.content" />
        <UButton type="submit" color="secondary" loading-auto>create</UButton>
      </UForm>
    </template>
  </UDashboardPanel>
</template>

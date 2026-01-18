<script setup lang="ts">
  import type { FormSubmitEvent } from "@nuxt/ui";
  import FormEditor from "~/components/form/FormEditor.vue";
  import { aboutSchema, type AboutForm } from "~/schemas/about.schema";
  import type { Database } from "~/types/database.types";

  const router = useRouter();
  const toast = useToast();
  const schema = aboutSchema;
  const state = ref({
    content: undefined as string | undefined,
  });

  type Schema = AboutForm;
  type About = Database["public"]["Tables"]["about"]["Row"];

  const client = useSupabaseClient<Database>();
  const { data: about, error } = await useAsyncData<About>("about", async () => {
    const { data, error } = await client.from("about").select().single();

    if (error) throw error;
    return data;
  });

  if (about.value) {
    state.value.content = about.value.content;
  }

  if (error.value || !about.value) {
    throw createError({
      status: 404,
      statusMessage: "Project not found",
      message: "Project you are looking for is not exist",
      fatal: true,
    });
  }

  const onSubmit = async (event: FormSubmitEvent<Schema>) => {
    if (!about.value) {
      toast.add({ title: "Data is empty", color: "error" });
      return;
    }
    try {
      await updateTable("about", about.value.id, event.data);
      await refreshNuxtData("about");
      router.push("/dashboard/about");
      toast.add({ title: "Success update about", color: "success" });
    } catch (error) {
      toast.add({ title: (error as Error).message, color: "error" });
    }
  };
</script>
<template>
  <UDashboardPanel>
    <template #body>
      <UForm :state="state" :schema="schema" class="space-y-4" @submit="onSubmit">
        <FormEditor v-model="state.content" />
        <UButton type="submit" color="secondary" loading-auto>update</UButton>
      </UForm>
    </template>
  </UDashboardPanel>
</template>

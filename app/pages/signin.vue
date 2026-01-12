<script setup lang="ts">
  import * as z from "zod";
  import type { FormSubmitEvent, AuthFormField } from "@nuxt/ui";
  definePageMeta({
    layout: false,
    middleware: ["guest"],
  });

  const client = useSupabaseClient();
  const router = useRouter();
  const fields = ref<AuthFormField[]>([
    {
      name: "email",
      type: "text",
      label: "Email",
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      required: true,
    },
  ]);
  const errorMessage = ref<string | null>(null);

  const schema = z.object({
    email: z.email({ message: "Email is required" }),
    password: z
      .string({ message: "Password is required" })
      .min(8, "Password must be at least 8 characters"),
  });

  type Schema = z.output<typeof schema>;

  async function onSubmit(payload: FormSubmitEvent<Schema>) {
    try {
      const { error } = await client.auth.signInWithPassword({
        email: payload.data.email,
        password: payload.data.password,
      });
      if (error) throw error;
      router.push("/dashboard");
    } catch (error) {
      errorMessage.value = (error as Error).message;
    }
  }
</script>
<template>
  <UContainer class="h-svh">
    <div class="grid items-center h-full">
      <UAuthForm
        :schema="schema"
        title="Sign In"
        icon="i-lucide-lock"
        :fields="fields"
        class="max-w-md mx-auto"
        :submit="{ color: 'accent', class: 'text-white' }"
        @submit="onSubmit">
        <template #validation>
          <UAlert
            v-if="errorMessage"
            color="error"
            :title="errorMessage"
            :ui="{ title: 'text-white' }" />
        </template>
      </UAuthForm>
    </div>
  </UContainer>
</template>

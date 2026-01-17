<script setup lang="ts">
  import * as z from "zod";
  import type { FormSubmitEvent } from "@nuxt/ui";
  const client = useSupabaseClient();
  const toast = useToast();

  const initialState = {
    currentPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  };

  const state = ref({ ...initialState });

  const passwordSchema = z
    .string({ message: "Password is required" })
    .min(8, { message: "Minimal 8 character" })
    .refine((password) => /[A-Z]/.test(password), {
      message: "Must have capital character",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "Must have lowercase character",
    })
    .refine((password) => /[0-9]/.test(password), { message: "Must have number" })
    .refine((password) => /[!@#$%^&*]/.test(password), {
      message: "Must have symbol !@#$%^&*",
    });

  const schema = z
    .object({
      currentPassword: z.string({ message: "Current password is required" }),
      newPassword: passwordSchema,
      newPasswordConfirm: z.string({ message: "Confirm password is required" }),
    })
    .refine((data) => data.newPassword === data.newPasswordConfirm, {
      message: "Confirm password not match",
      path: ["newPasswordConfirm"],
    });

  type Schema = z.output<typeof schema>;

  const onSubmit = async (payload: FormSubmitEvent<Schema>) => {
    try {
      const user = await client.auth.getUser();
      if (!user.data.user?.email) {
        throw new Error("You must be logged in");
      }

      const { error: reauthError } = await client.auth.signInWithPassword({
        email: user.data.user.email,
        password: payload.data.currentPassword,
      });

      if (reauthError) {
        throw new Error("Current password is incorrect");
      }

      const { error: updateError } = await client.auth.updateUser({
        password: payload.data.newPassword,
      });

      if (updateError) throw updateError;

      toast.add({ title: "Success change password", color: "success" });
      state.value = { ...initialState };
    } catch (error) {
      toast.add({ title: (error as Error).message, color: "error" });
    }
  };
</script>
<template>
  <UDashboardPanel>
    <template #body>
      <UForm
        :schema="schema"
        :state="state"
        class="max-w-md space-y-4"
        :loading-auto="true"
        @submit="onSubmit">
        <FormPassword
          v-model="state.currentPassword"
          label="Current password"
          name="currentPassword" />
        <FormPassword v-model="state.newPassword" label="New password" name="NewPassword" />
        <FormPassword
          v-model="state.newPasswordConfirm"
          label="New password confirm"
          name="newPasswordConfirm" />
        <UButton type="submit" color="secondary" loading-auto>change password</UButton>
      </UForm>
    </template>
  </UDashboardPanel>
</template>

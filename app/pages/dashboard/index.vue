<script setup lang="ts">
  definePageMeta({
    middleware: ["auth"],
  });
  const client = useSupabaseClient();
  const router = useRouter();

  async function logout() {
    try {
      const { error } = await client.auth.signOut();
      if (error) throw error;
      router.push("/dashboard/signin");
    } catch (error) {
      console.log(error); // eslint-disable-line no-console
    }
  }
</script>
<template>
  <UButton @click="logout">logout</UButton>
</template>

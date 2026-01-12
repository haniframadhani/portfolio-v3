<script setup lang="ts">
  import type { Database } from "~/types/database.types";
  type Blogs = Database["public"]["Tables"]["blogs"]["Row"];
  const client = useSupabaseClient();
  const route = useRoute();
  const { data: blog, error } = await useAsyncData<Blogs>(`blog-${route.params.id}`, async () => {
    const { data, error } = await client
      .from("blogs")
      .select()
      .eq("id", route.params.id as string)
      .single();
    if (error) throw error;
    return data;
  });
  if (error.value || !blog.value) {
    throw createError({
      status: 404,
      statusMessage: "Blog not found",
      message: "Blog you are looking for is not exist",
      fatal: true,
    });
  }
</script>
<template>
  <UContainer>
    <MDC v-if="blog?.content" :value="blog.content" />
    <div v-else>No content available</div>
  </UContainer>
</template>

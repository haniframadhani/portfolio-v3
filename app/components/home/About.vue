<script setup lang="ts">
  import type { Database } from "~/types/database.types";

  type About = Database["public"]["Tables"]["about"]["Row"];

  const client = useSupabaseClient<About>();
  const { data: about } = await useAsyncData<About>("about", async () => {
    const { data, error } = await client.from("about").select().single();

    if (error) throw error;
    return data;
  });
</script>
<template>
  <section id="about" class="my-16">
    <h2 class="font-display font-bold text-3xl md:text-4xl mb-12">Halo, Saya Hanif</h2>
    <MDC v-if="about?.content" :value="about.content" />
    <div class="flex justify-center py-38">
      <UButton
        label="Let's build trust together"
        variant="solid"
        color="accent"
        to="mailto:&#109;&#104;&#97;&#110;&#105;&#102;&#114;&#97;&#109;&#97;&#100;&#104;&#97;&#110;&#105;&#57;&#56;&#53;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
        size="xl"
        class="text-white" />
    </div>
  </section>
</template>

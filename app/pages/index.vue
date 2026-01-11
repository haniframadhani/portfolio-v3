<script setup lang="ts">
  import About from "~/components/home/About.vue";
  import Blog from "~/components/home/Blog.vue";
  import Hero from "~/components/home/Hero.vue";
  import Project from "~/components/home/Project.vue";
  import Skill from "~/components/home/Skill.vue";

  import type { Database } from "~/types/database.types";

  type Blogs = Database["public"]["Tables"]["projects"]["Row"];
  type Projects = Database["public"]["Tables"]["projects"]["Row"];

  const client = useSupabaseClient();
  const { data: blogs } = await useAsyncData<Blogs[]>("blogs", async () => {
    const { data, error } = await client
      .from("blogs")
      .select()
      .order("created_at", { ascending: false })
      .limit(2);

    if (error) throw error;
    return data || [];
  });
  const { data: projects } = await useAsyncData<Projects[]>("projects", async () => {
    const { data, error } = await client
      .from("projects")
      .select()
      .order("created_at", { ascending: false })
      .limit(3);
    if (error) throw error;
    return data || [];
  });
</script>

<template>
  <UContainer>
    <Hero />
    <Project :projects="projects ?? []" />
    <Blog :blogs="blogs ?? []" />
    <Skill />
    <About />
  </UContainer>
</template>

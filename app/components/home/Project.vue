<script setup lang="ts">
  import type { Database } from "~/types/database.types";
  import Project from "../card/Project.vue";
  type Projects = Database["public"]["Tables"]["projects"]["Row"];
  defineProps<{ projects: Projects[] }>();
</script>

<template>
  <section id="project" class="my-16">
    <h2 class="font-display font-bold text-3xl md:text-4xl mb-12">Latest Trust Build</h2>
    <div v-if="projects && projects.length > 0" class="grid gap-6">
      <NuxtLink v-for="project in projects" :key="project.id" :to="`/projects/${project.id}`">
        <Project :title="project.title" :thumbnail="project.thumbnail" :excerpt="project.excerpt" />
      </NuxtLink>
    </div>
    <div v-else class="col-span-2 text-center py-8">
      <p class="text-gray-500">No project found</p>
    </div>
  </section>
</template>

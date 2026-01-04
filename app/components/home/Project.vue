<script setup lang="ts">
import Project from "../card/Project.vue";
</script>

<template>
  <section id="project" class="my-16">
    <h2 class="font-display font-bold text-3xl md:text-4xl mb-12">
      Latest Trust Build
    </h2>
    <div class="grid gap-6">
      <Project />
      <Project />
      <Project />
    </div>
  </section>
</template>

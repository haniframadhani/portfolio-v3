<script setup lang="ts">
  import About from "~/components/home/About.vue";
  import Blog from "~/components/home/Blog.vue";
  import Hero from "~/components/home/Hero.vue";
  import Project from "~/components/home/Project.vue";
  import Skill from "~/components/home/Skill.vue";
</script>

<template>
  <UContainer>
    <Hero />
    <Project />
    <Blog />
    <Skill />
    <About />
  </UContainer>
</template>

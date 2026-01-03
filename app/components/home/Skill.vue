<script setup lang="ts">
import Figma from "~/assets/svg/Figma.vue";
import Laravel from "~/assets/svg/Laravel.vue";
import Next from "~/assets/svg/Next.vue";
import Nuxt from "~/assets/svg/Nuxt.vue";
import Tailwind from "~/assets/svg/Tailwind.vue";
import Typescript from "~/assets/svg/Typescript.vue";
</script>

<template>
  <section class="my-16">
    <h2 class="font-display font-bold text-3xl md:text-4xl mb-12">
      The building blocks
    </h2>
    <div class="grid grid-cols-3 md:grid-cols-6 gap-y-6 md:gap-0 justify-items-center">
      <Next class="size-24" />
      <Nuxt class="size-24" />
      <Laravel class="size-24" />
      <Typescript class="size-24" />
      <Tailwind class="size-24" />
      <Figma class="size-24" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import IconFigma from "~/assets/svg/IconFigma.vue";
  import IconLaravel from "~/assets/svg/IconLaravel.vue";
  import IconNext from "~/assets/svg/IconNext.vue";
  import IconNuxt from "~/assets/svg/IconNuxt.vue";
  import IconTailwind from "~/assets/svg/IconTailwind.vue";
  import IconTypescript from "~/assets/svg/IconTypescript.vue";
</script>

<template>
  <section id="skill" class="my-16">
    <h2 class="font-display font-bold text-3xl md:text-4xl mb-12">The building blocks</h2>
    <div class="grid grid-cols-3 md:grid-cols-6 gap-y-6 md:gap-0 justify-items-center">
      <IconNext class="size-24" />
      <IconNuxt class="size-24" />
      <IconLaravel class="size-24" />
      <IconTypescript class="size-24" />
      <IconTailwind class="size-24" />
      <IconFigma class="size-24" />
    </div>
  </section>
</template>

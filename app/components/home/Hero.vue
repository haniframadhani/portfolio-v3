<script setup lang="ts">
const words = ref([
  "trust",
  "action",
  "results",
  "growth",
  "connection",
  "clarity",
  "engagement",
  "value",
]);
// const index = ref(0);
// setInterval(() => {
//   index.value = (index.value + 1) % word.value.length;
// }, 1600);
</script>

<template>
  <section class="grid content-center h-dvh">
    <div
      class="absolute left-0 top-0 size-full -z-10 opacity-12 blur-[2px] bg-[url('/images/bg.webp')] bg-size-[60rem_auto] md:bg-cover bg-center md:bg-position-[center_left_15rem] bg-no-repeat"
    ></div>
    <h3 class="text-2xl md:text-3xl">Hi!, I'm Hanif</h3>
    <h1
      class="font-display text-4xl md:text-5xl font-black inline-block overflow-hidden"
    >
      I Build&nbsp;
      <span class="text-accent capitalize relative">
        <span v-for="word in words" :key="word" class="absolute">{{
          word
        }}</span>
      </span>
    </h1>
    <h2 class="text-3xl md:text-4xl font-display font-medium">
      More than just a website
    </h2>
    <div class="flex gap-6 mt-6">
      <UButton
        label="Get in touch"
        variant="solid"
        color="accent"
        to="mailto:&#109;&#104;&#97;&#110;&#105;&#102;&#114;&#97;&#109;&#97;&#100;&#104;&#97;&#110;&#105;&#57;&#56;&#53;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
      />
      <UButton
        label="Github"
        variant="outline"
        color="secondary"
        to="https://github.com/haniframadhani"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  </section>
</template>

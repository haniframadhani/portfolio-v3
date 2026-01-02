<script setup lang="ts">
let intervalId: ReturnType<typeof setInterval> | undefined;
const tailwindMdBreakpointInPixel = 448;
const fontHeight5xlAndGap1InPixel = 65.042;
const fontHeight2xlAndGap1InPixel = 50.875;

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
const loopWords = computed(() => [...words.value, words.value[0]]);
const selectedIndex = ref(0);
const offset = ref(0);
const itemHeight = ref(50.875); // default mobile
const allowAnimation = ref(true);

const updateItemHeight = () => {
  itemHeight.value =
    window.innerWidth >= tailwindMdBreakpointInPixel
      ? fontHeight5xlAndGap1InPixel
      : fontHeight2xlAndGap1InPixel;
  offset.value = -(selectedIndex.value * itemHeight.value);
};

const scrollToIndex = () => {
  offset.value = -(selectedIndex.value * itemHeight.value);
};

onMounted(() => {
  updateItemHeight();
  window.addEventListener("resize", updateItemHeight);

  intervalId = setInterval(() => {
    allowAnimation.value = true;
    selectedIndex.value++;
    scrollToIndex();

    if (selectedIndex.value === words.value.length) {
      setTimeout(() => {
        allowAnimation.value = false;
        selectedIndex.value = 0;
        scrollToIndex();
      }, 300);
    }
  }, 1600);
});

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId);
  window.removeEventListener("resize", updateItemHeight);
});
</script>

<template>
  <section class="grid content-center h-dvh">
    <div
      class="absolute left-0 top-0 size-full -z-10 opacity-12 blur-[2px] bg-[url('/images/bg.webp')] bg-size-[60rem_auto] md:bg-cover bg-center md:bg-position-[center_left_15rem] bg-no-repeat"
    ></div>
    <h3 class="text-xl md:text-3xl">Hi!, I'm Hanif</h3>
    <div
      class="flex h-11 md:h-16 font-display text-3xl md:text-5xl font-black overflow-hidden"
    >
      <h1>I Build&nbsp;</h1>
      <span
        class="flex flex-col w-fit gap-1"
        :class="
          allowAnimation && `transition-transform duration-300 ease-in-out`
        "
        :style="{ transform: `translateY(${offset}px)` }"
      >
        <div
          v-for="(word, index) in loopWords"
          :key="index"
          class="flex items-center justify-start"
        >
          <span class="text-accent capitalize">
            {{ word }}
          </span>
        </div>
      </span>
    </div>
    <h2 class="text-2xl md:text-4xl font-display font-medium">
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

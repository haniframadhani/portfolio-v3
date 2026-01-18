<script setup lang="ts">
  const content = defineModel<string>();
</script>
<template>
  <UFormField label="Excerpt" name="excerpt">
    <UTextarea v-model="content" class="w-full" :row="4" placeholder="write a short excerpt" />
  </UFormField>
</template>

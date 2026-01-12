<script setup lang="ts">
  defineProps<{
    maxLength: number;
  }>();
  const title = defineModel<string>();
</script>
<template>
  <UFormField label="Title" name="title">
    <UInput
      v-model="title"
      type="text"
      class="w-full"
      :maxlength="maxLength"
      aria-describedby="character-count"
      :ui="{ trailing: 'pointer-events-none' }">
      <template #trailing>
        <div
          id="character-count"
          class="text-xs text-muted tabular-nums"
          aria-live="polite"
          role="status">
          {{ title?.length }} / {{ maxLength }}
        </div>
      </template>
    </UInput>
  </UFormField>
</template>

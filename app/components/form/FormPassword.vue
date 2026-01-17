<script setup lang="ts">
  defineProps<{
    label: string;
    name: string;
  }>();

  const model = defineModel<string>();
  const show = ref(false);
</script>

<template>
  <UFormField :label="label" :name="name">
    <UInput v-model="model" :type="show ? 'text' : 'password'" class="w-full">
      <template #trailing>
        <UButton
          color="neutral"
          variant="ghost"
          size="xs"
          :icon="show ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'"
          @click="show = !show" />
      </template>
    </UInput>
  </UFormField>
</template>

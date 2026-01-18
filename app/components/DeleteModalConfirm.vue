<script setup lang="ts">
  defineProps<{ type: string }>();
  const emit = defineEmits<{ close: [boolean] }>();
</script>
<template>
  <UModal
    :close="{ onClick: () => emit('close', false) }"
    :title="`Delete this ${type}?`"
    :description="`Are you sure you want to delete this ${type}? This action cannot be undone.`"
    :ui="{ footer: 'justify-end' }">
    <template #footer>
      <div class="flex gap-2">
        <UButton color="neutral" label="Cancel" @click="emit('close', false)" />
        <UButton color="error" label="Delete" @click="emit('close', true)" />
      </div>
    </template>
  </UModal>
</template>

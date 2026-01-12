<script setup lang="ts">
  const thumbnail = defineModel<File>();
</script>
<template>
  <UFormField label="Thumbnail" name="thumbnail">
    <UFileUpload
      v-model="thumbnail"
      accept="image/*"
      icon="i-lucide-image"
      label="Drop your image here"
      description="PNG, JPG or GIF (max. 10MB)"
      class="aspect-video"
      :multiple="false" />
  </UFormField>
</template>

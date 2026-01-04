<template>
  <UCard variant="soft" class="hover:shadow-lg hover:shadow-secondary-800 duration-300">
    <div class="grid grid-cols-1 gap-8">
      <NuxtImg
        src="/images/blog.jpg"
        class="size-full aspect-4/3 object-cover rounded-md overflow-hidden" />
      <div class="grid gap-2">
        <h3 class="font-display font-bold text-3xl">Title of Blog</h3>
        <p class="line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quaerat accusantium
          autem animi molestiae temporibus at consequatur numquam blanditiis voluptate?
        </p>
      </div>
    </div>
  </UCard>
</template>

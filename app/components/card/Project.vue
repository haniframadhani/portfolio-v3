<template>
  <NuxtLink to="#">
    <UCard variant="soft" class="hover:shadow-lg hover:shadow-secondary-800 duration-300">
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h3 class="font-bold font-display text-3xl mb-4">Title of Project</h3>
          <p class="text-lg mb-8 line-clamp-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis corporis rem
            assumenda expedita quae asperiores a optio animi sit quia.
          </p>
          <span class="text-sm">View the process</span>
        </div>
        <NuxtImg
          src="/images/project.jpg"
          class="size-full aspect-square object-cover rounded-md overflow-hidden order-first md:order-last" />
      </div>
    </UCard>
  </NuxtLink>
</template>

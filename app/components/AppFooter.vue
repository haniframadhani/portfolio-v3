<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }} by Muhammad Hanif Ramadhani.
      </p>
    </template>
    <template #right>
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/haniframadhani/portfolio-v3"
        target="_blank"
        aria-label="GitHub"
        rel="noopener noreferrer" />
      <UButton
        icon="i-simple-icons-instagram"
        color="neutral"
        variant="ghost"
        to="https://www.instagram.com/haniframadhani_design/"
        target="_blank"
        aria-label="Instagram"
        rel="noopener noreferrer" />
      <UButton
        icon="i-simple-icons-linkedin"
        color="neutral"
        variant="ghost"
        to="https://www.linkedin.com/in/muhammad-hanif-ramadhani/"
        target="_blank"
        aria-label="LinkedIn"
        rel="noopener noreferrer" />
      <UButton
        icon="i-simple-icons-telegram"
        color="neutral"
        variant="ghost"
        to="https://t.me/haniframadhani985"
        target="_blank"
        aria-label="Telegram"
        rel="noopener noreferrer" />
    </template>
  </UFooter>
</template>

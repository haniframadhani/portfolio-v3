import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  srcDir: "app/",
  modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/image", "@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  ui: {
    colorMode: false,
    theme: {
      colors: [
        "primary",
        "secondary",
        "accent",
        "info",
        "success",
        "warning",
        "error",
      ],
    },
  },
});

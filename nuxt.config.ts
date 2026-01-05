import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  srcDir: "app/",
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui", "@nuxtjs/color-mode", "@nuxtjs/supabase"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  colorMode: { preference: "dark", fallback: "dark" },
  ui: {
    colorMode: false,
    theme: {
      colors: ["primary", "secondary", "accent", "info", "success", "warning", "error"],
    },
  },
  supabase: {
    redirect: false,
    types: false,
  },
});

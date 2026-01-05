export default defineAppConfig({
  ui: {
    colors: {
      primary: "primary",
      secondary: "secondary",
      accent: "accent",
    },
    prose: {
      h6: {
        slots: {
          base: "font-display font-bold text-lg",
        },
      },
      h5: {
        slots: {
          base: "font-display font-bold text-xl",
        },
      },
      h4: {
        slots: {
          base: "font-display font-bold text-2xl",
        },
      },
      h3: {
        slots: {
          base: "font-display font-bold text-3xl",
        },
      },
      h2: {
        slots: {
          base: "font-display font-bold text-4xl",
        },
      },
      h1: {
        slots: {
          base: "font-display font-bold text-5xl",
        },
      },
      p: {
        base: "text-base font-sans font-normal",
      },
    },
  },
});

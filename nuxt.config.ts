import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["shadcn-nuxt"],
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  future: {
    compatibilityVersion: 4,
  },

  shadcn: {
    prefix: '',
    componentDir: './app/components/ui'
  }
});

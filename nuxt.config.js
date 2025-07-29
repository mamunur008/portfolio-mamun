import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  css: ['~/assets/css/main.css','@fortawesome/fontawesome-svg-core/styles.css'],

  router: {
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
          top: 80 // offset for navbar
        }
      } else if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    }
  },

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@vesp/nuxt-fontawesome',
  ],
  googleFonts: {
    families: {
      Montserrat: true,
      Roboto: true,
      Poppins: true,
    },
    wght: [700,800],
    display: 'swap',
  },
  // fontawesome: {
  //   icons: {solid: ['coffee', 'child', 'laptop','laptop-code','cogs' ],}
  // },
})
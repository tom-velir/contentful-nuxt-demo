// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["/node_modules/water.css/out/dark.css", "assets/styles/global.scss"],
  runtimeConfig: {
    contentful: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      cdaToken: process.env.CONTENTFUL_CDA_TOKEN,
      env: process.env.CONTENTFUL_ENV,
    },
  },
});

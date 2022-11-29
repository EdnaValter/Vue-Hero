// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // this is where we declare extra modules we use in our app
    modules: ['@nuxtjs/tailwindcss'],
    //this is where we add metatags, you can override this title to another components if you want
    app: {
        head: {
            title: 'Nuxt Exercise',
            meta: [
                {
                   name: 'description', content: 'Everything about NUxt 3' 
                }
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
        }
    },
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY
      }
})

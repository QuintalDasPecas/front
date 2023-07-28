// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/css/navigation-desktop.css',
    '~/css/home.css',
    '~/css/font-family.css',
    '~/css/custom.css',
    '~/css/search.css',
    '~/css/search-custom.css',    
    '~/css/vip.core.css',
    '~/css/insurtech.css',
    '~/css/swiper.css' ,
    'primevue/resources/themes/lara-light-blue/theme.css',
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.min.css' ,
    'primeicons/primeicons.css',
    '~/css/theme-custom.css' 
  ],
  build: {
		transpile: ["primevue"]
	},
  components: true,
  ssr: false,
  runtimeConfig: {
    public :{
      API_URL : 'http://127.0.0.1:8000/api/',
      AUTH_URL : 'login',
      CSRF_URL : 'http://127.0.0.1:8000/sanctum/csrf-cookie',
      FRONTEND_URL : 'http://127.0.0.1:3000'
    }
  }
})
export default defineNuxtRouteMiddleware((to, from) => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
        return navigateTo('/');
    }
  })
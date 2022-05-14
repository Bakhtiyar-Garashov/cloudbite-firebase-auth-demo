import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import { getAuth } from '@firebase/auth';

const IsLoggedIn = ()=> {
  const user = getAuth().currentUser;

  if (user) return true

  return false
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      beforeEnter: IsLoggedIn
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/SignUp.vue'),
    }
  ]
})

export default router

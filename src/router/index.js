import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VerlaufPage from "@/components/VerlaufPage";
import SignIn from "@/components/SignIn.vue";
//import { LoginCallback } from '@okta/okta-vue'
//import { navigationGuard } from '@okta/okta-vue'
//import LoginView from "@/views/Login.vue";
//import ProfileView from "@/views/Profile.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignIn
  },

  {
    path: '/verlauf',
    name: 'verlauf',
    component: VerlaufPage
  }



    /*
  {
    path: '/login/callback',
    component: LoginCallback
  },
  {
    path: '/profile',
    component: ProfileView,
    meta: {
      requiresAuth: true
    }
  }
   */

  ]

const router = createRouter({
  history: createWebHistory(process.env.Base_URL),
  routes
})

//router.beforeEach(navigationGuard)

export default router

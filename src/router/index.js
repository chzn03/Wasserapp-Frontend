import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { LoginCallback } from '@okta/okta-vue'
import { navigationGuard } from '@okta/okta-vue'
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";

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
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/login/callback',
    component: LoginCallback
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(navigationGuard)

export default router

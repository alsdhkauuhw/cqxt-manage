import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
/* import HomeView from '../views/HomeView.vue' */

const routes: Array<RouteRecordRaw> = [

  {
    path: "/",
    name: "Cqxt-container",
    component: () => import("@/views/CqxtContainer.vue")
  },
  {
    path: "/sign-in",
        name: "sign-in",
        component: ()=> import("@/views/signin.vue")
  },

  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import("@/views/signup.vue")
  },

  {
    path: "/my-space",
    name: "my-space",
    component: () => import("@/views/myspace.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import TabsPage from '../views/TabsPage.vue';

import { auth } from '../main';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/HomePage.vue')
      },
      {
        path: 'events',
        name: 'Events',
        component: () => import('../views/EventsPage.vue')
      },
      {
        path: 'shop',
        name: 'Shop',
        component: () => import('../views/ShopPage.vue')
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('../views/ContactPage.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/AdminPage.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    auth.onAuthStateChanged(user => {
      if (user) {
        next();
      } else {
        next('/login');
      }
    });
  } else {
    next();
  }
});

export default router
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('./components/Login.vue') },
  { path: '/index.html', component: () => import('./components/Login.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

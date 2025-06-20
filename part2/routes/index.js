import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import OwnerDashboard from '../components/OwnerDashboard.vue';
import WalkerDashboard from '../components/WalkerDashboard.vue';

const routes = [
  { path: '/', component: LoginPage },
  { path: '/owner-dashboard', component: OwnerDashboard },
  { path: '/walker-dashboard', component: WalkerDashboard }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

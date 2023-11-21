import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import App from './App.vue'

import Home from '../src/views/home.vue'
import Eventos from '../src/views/HomeEventos.vue'
import CrearEventos from '../src/views/CrearEvento.vue'
import LoginComponent from '../src/views/LoginView.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/eventos',
    component: Eventos,
  },
  {
    path: '/CrearEventos',
    component: CrearEventos,
  },
  {
    path: '/login',
    component: LoginComponent,
  }]

const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');


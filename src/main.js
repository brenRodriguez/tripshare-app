import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia'
import App from './App.vue'

import Home from '../src/views/home.vue'
import Eventos from '../src/views/eventos.vue'
import CrearEventos from '../src/views/crearEventos.vue'
import LoginComponent from '../src/views/login.vue'

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
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia()
const app = createApp(App); // Cambia el componente inicial si es necesario

app.use(pinia)
app.use(router);
app.mount('#app');


import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia'
import App from './App.vue'

import Home from '../src/views/home.vue'
import Eventos from '../src/views/eventos.vue'

const routes = [
    {
      path: '/',
      component: Home,
    },
      {
        path: '/eventos',
        component: Eventos,
      }
    ];
    
    const router = createRouter({
      history: createWebHistory(),
      routes,
    });
  
    const pinia = createPinia()
    const app = createApp(App); // Cambia el componente inicial si es necesario
    
    app.use(pinia)
    app.use(router);
    app.mount('#app');
  

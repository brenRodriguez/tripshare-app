<template>
  <nav class="navbar navbar-expand-lg navbar-light fondo">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto links-list">
        <li class="nav-item active ">
          <router-link class="nav-link color" to="/">Home</router-link>
        </li>
        <li class="nav-item active ">
          <router-link class="nav-link color" to="/eventos">Ver Eventos</router-link>
        </li>
        <li class="nav-item active color">
          <router-link class="nav-link color" to="/crearEventos">Crear Eventos</router-link>
        </li>
        <li class="nav-item active color">
          <router-link class="nav-link color" to="/verEstadisticas">Ver Estadisticas</router-link>
        </li>
        <div class="nav-item">
          <div v-if="!soyAdmin">
            <li>
              <router-link class="nav-link color" to="/login">Iniciar Sesión</router-link>
            </li>
          </div>
          <div v-if="soyAdmin">
            <li>
              <h5>Bienvenido ADMIN!</h5>
              <a href="#" @click="cerrarSesion">Cerrar sesión</a>
            </li>
          </div>
        </div>
      </ul>
    </div>
  </nav>
  <RouterView></RouterView>
  <Footer />
</template>

<style scoped>
.fondo {
  max-height: 90px;
  background-color: #427676;
  align-items: baseline;
}

.color {
  color: white;
}

.links-list {
  width: 100%;
}

.links-list h5,
.links-list a {
  color: #ffffff;
  text-decoration: none;
}

.links-list a:hover {
  font-weight: 600;
}

.nav-item:last-child {
  margin-left: auto;
}
</style>

<script setup>
import Footer from './components/FooterTS.vue'

const soyAdmin = sessionStorage.getItem("nombre") === "ADMIN";

const cerrarSesion = () => {
  sessionStorage.clear();
  location.reload();
}
</script>
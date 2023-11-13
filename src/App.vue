<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="navbar-brand" to="/">Home</router-link>
      </li>
    </ul>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto links-list">
        <li class="nav-item active">
          <router-link class="nav-link" to="/eventos">Ver Eventos</router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" to="/crearEventos">Crear Eventos</router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" to="/login">Iniciar Sesión</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <RouterView></RouterView>
  <Footer />
</template>

<style scoped>
.links-list {
  width: 100%;
}

.nav-item:last-child {
  margin-left: auto;
}
</style>

<script setup>
  import Footer from './components/FooterTS.vue'
</script>
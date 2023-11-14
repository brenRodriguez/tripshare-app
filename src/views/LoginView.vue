<template>
  <div class="container">
    <h1>Inicia Sesión</h1>
    <div class="d-flex">
      <label>Usuario:</label> <input type="text" v-model="usuario" />
    </div>
    <div class="d-flex">
      <label>Contraseña:</label> <input type="password" v-model="contraseña" />
    </div>
    <input type="button" class="btn btn-primary" value="Iniciar sesión" @click="login" />
  </div>
</template>

<script setup>
import { ref } from "vue";
  const usuario = ref("");
  const contraseña = ref("");
  const login = () => {
    if (usuario.value === 'ADMIN' && contraseña.value === 'ADMIN') {
      sessionStorage.setItem("nombre", usuario.value);
      window.location.replace("http://localhost:5173/")
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }
</script>



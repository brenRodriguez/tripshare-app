<template>
  
  <div class="container">
    
      <div class="formulario">
        <div class="d-flex campo">
          <h1>Inicia Sesión</h1>
        </div>
        <div class="d-flex campo" >
          <label class="normalWidth" style="margin-left: 5px;">Usuario:</label> <input type="text" class="slots" v-model="usuario" />
        </div>
        <div class="d-flex campo">
          <label class="normalWidth">Contraseña:</label> <input type="password" class="slots" v-model="contraseña" />
        </div>
        <div class="d-flex campo">
          <input type="button" class="btn btn-primary slots" value="Iniciar sesión" @click="login" />
        </div>
    </div>
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

<style>

.formulario{
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 50px;
}

.campo{
  justify-content: center;
  gap: 4px;
}

.slots{
  max-width: 200px;
}

.normalWidth{
  min-width: 80px;
}

</style>



<template>
  <div class="container">
    <h1>Crear evento</h1>

    <form>
      <div class="d-flex" style="gap: 20px; flex-direction: column">
        <div class="d-flex"><label>Nombre:</label> <input type="text" v-model="nombre" required /></div>
        <div class="d-flex"><label>Edad:</label> <input type="number" v-model="edad" required /></div>
        <div class="d-flex"><label>Mail:</label> <input type="text" v-model="mail" required /></div>


        <input type="button" class="btn btn-primary" value="Anotarse" @click="anotarse" />
      </div>
    </form>
  </div>
</template>
  
<style setup></style>
  
<script setup>

const evento = defineProps({
  id: Number,
  titulo: String,
  precio: Number,
  fecha: Date,
  descripcion: String,
  cantidad: Number,
  cantMax: Number,
});

import { ref } from "vue";

const nombre = ref("");
const edad = ref("");
const mail = ref("");



const anotarse = () => {

  const datos = {
    nombre: nombre.value,
    edad: edad.value,
    mail: mail.value,

  };


  const url = "https://652f152c0b8d8ddac0b233a9.mockapi.io/usuarios";


  const opciones = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  };

  fetch(url, opciones)
    .then((response) => {
      if (!response.ok) {
        anotarseEvento(evento)

      }
      return response.json();
    })
    .then((data) => {
      console.log("Solicitud POST exitosa", data);
    })
    .catch((error) => {
      console.error("Error al enviar la solicitud POST", error);
    });
};


const anotarseEvento = (event) => {
  const datos = {
    titulo: event.titulo,
    descripcion: event.descripcion,
    precio: event.precio,
    fecha: event.fecha,
    cantidad: event.cantidad + 1,
    cantidadMaxima: event.cantMax,
    estado:'ACTIVO'
  };
  const url = `https://652f152c0b8d8ddac0b233a9.mockapi.io/evento/${event.id}`;

  const opciones = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  };

  fetch(url, opciones)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Solicitud POST exitosa", data);
    })
    .catch((error) => {
      console.error("Error al enviar la solicitud POST", error);
    });
};

</script>
  
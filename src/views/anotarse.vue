<template>
    <div class="container">
      <h1>Crear evento</h1>
  
      <form>
        <div class="d-flex" style="gap: 20px; flex-direction: column">
          <div class="d-flex"><label>Nombre:</label> <input type="text" v-model="nombre" required/></div>
          <div class="d-flex"><label>Edad:</label> <input type="number" v-model="edad" required/></div>
          <div class="d-flex"><label>Mail:</label> <input type="text" v-model="mail" required/></div>
          
    
          <input 
            type="button"
            class="btn btn-primary"
            value="Anotarse"
            @click="anotarse" />
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

  import Card from "../components/Card.vue";
  import { ref } from "vue";

const nombre = ref("");
const edad = ref("");
const mail = ref("");



  const anotarse = () => {
  // Datos que deseas enviar en la solicitud POST
  const datos = {
      nombre: nombre.value,
      edad:  edad.value,
      mail:  mail.value,

  };

  // URL de la API a la que deseas enviar la solicitud POST
  const url = "https://652f152c0b8d8ddac0b233a9.mockapi.io/usuarios"; // Reemplaza con la URL correcta
  
  // Configuración de la solicitud
  const opciones = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Puedes agregar encabezados adicionales si es necesario
    },
    body: JSON.stringify(datos),
  };
  
  // Realizar la solicitud POST
  fetch(url, opciones)
    .then((response) => {
      if (!response.ok) {
        anotarseEvento(evento)
        
      }
      return response.json();
    })
    .then((data) => {
      console.log("Solicitud POST exitosa", data);
      // Realizar acciones adicionales con la respuesta
    })
    .catch((error) => {
      console.error("Error al enviar la solicitud POST", error);
      // Manejar errores
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
  };
  const url = `https://652f152c0b8d8ddac0b233a9.mockapi.io/evento/${event.id}`;

  const opciones = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  };

  // Realizar la solicitud POST
  fetch(url, opciones)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Solicitud POST exitosa", data);
      //location.reload();
    })
    .catch((error) => {
      console.error("Error al enviar la solicitud POST", error);
    });
};

  </script>
  
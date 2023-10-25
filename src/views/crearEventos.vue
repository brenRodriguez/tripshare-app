<template>
    <div class="container">
      <h1>Crear evento</h1>
  
      <div class="d-flex" style="gap: 20px; flex-direction: column">
        <div class="d-flex"><label>Titulo:</label> <input type="text" id="titulo"/></div>
        <div class="d-flex"><label>Precio:</label> <input type="number" id="precio"/></div>
        <div class="d-flex">
          <label>Descripcion:</label> <input type="text" id="descripcion"/>
        </div>
        <div class="d-flex"><label>Fecha:</label> <input type="date" id="fecha"/></div>
  
        <input
          type="button"
          class="btn btn-primary"
          value="Crear"
          @click="crearEvento" />
      </div>
    </div>
  </template>
  
  <style setup></style>
  
  <script setup>
  import Card from "../components/Card.vue";
  import { ref } from "vue";
  
  const crearEvento = () => {
  // Datos que deseas enviar en la solicitud POST
  const datos = {
      titulo: document.getElementById("titulo").value,
      descripcion:  document.getElementById("descripcion").value,
      precio:  document.getElementById("precio").value,
      fecha:  document.getElementById("fecha").value,
      cantidad:0
  };
  
  // URL de la API a la que deseas enviar la solicitud POST
  const url = "https://652f152c0b8d8ddac0b233a9.mockapi.io/evento"; // Reemplaza con la URL correcta
  
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
        throw new Error("Error en la solicitud");
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
  </script>
  
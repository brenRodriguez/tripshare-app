<template>
    <div class="container">
      <h1>Crear evento</h1>
  
      <form>
        <div class="d-flex" style="gap: 20px; flex-direction: column">
          <div class="d-flex"><label>Titulo:</label> <input type="text" v-model="titulo" required/></div>
          <div class="d-flex"><label>Precio:</label> <input type="number" v-model="precio" required/></div>
          <div class="d-flex"><label>Cantidad Maxima:</label> <input type="number" v-model="cantMax" required/></div>
          <div class="d-flex">
            <label>Descripcion:</label> <input type="text" v-model="descripcion" required/>
          </div>
          <div class="d-flex"><label>Fecha:</label> <input type="date" v-model="fecha" required/></div>
          
    
          <input 
            type="button"
            class="btn btn-primary"
            value="Crear"
            @click="crearEvento" />
        </div>
    </form>
    </div>
  </template>
  
  <style setup></style>
  
  <script setup>
  import Card from "../components/Card.vue";
  import { ref } from "vue";

const titulo = ref("");
const descripcion = ref("");
const precio = ref("");
const cantMax = ref("");
const fecha = ref("");


  const crearEvento = () => {
  // Datos que deseas enviar en la solicitud POST
  const datos = {
      titulo: titulo.value,
      descripcion:  descripcion.value,
      precio:  precio.value,
      fecha:  fecha.value,
      cantidad:0,
      cantidadMaxima: cantMax.value 
  };

  let fecha2 = new Date(fecha.value)
  fecha2.setDate(fecha2.getDate() + 1);
  let fechaHoy = new Date();

 if(titulo.value === "" || descripcion.value === "" || precio.value === "" || fecha.value === "" ){
  alert("Faltan completar datos");
  } if (precio.value < 0) {
    alert("El precio invalido");
    return;
  } if (cantMax.value <= 0) {
    alert("Cantidad maxima invalido");
    return;
  }  if (fecha2 < fechaHoy){
    alert("Me parece que quieres viajar en el tiempo");
    return;
  }
  
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
  
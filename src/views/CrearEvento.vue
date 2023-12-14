<template>
  <div class="container ">
    <div class="crear-evento-container">
      <h1>Crear evento</h1>
      <form class="form-crear-evento">
        <div class="d-flex" style="gap: 20px; flex-direction: column">
          <div class="d-flex form-field"><label>Título:</label> <input type="text" v-model="titulo" required /></div>
          <div class="d-flex form-field"><label>Precio:</label> <input type="number" v-model="precio" required /></div>
          <div class="d-flex form-field"><label>Cantidad Máxima:</label> <input type="number" v-model="cantMax"
              required /></div>
          <div class="d-flex form-field">
            <label>Descripción:</label>
            <textarea class="form-control" id="message-text" v-model="descripcion"></textarea>
          </div>
          <div class="d-flex form-field"><label>Fecha:</label> <input type="date" v-model="fecha" required /></div>
          <input type="button" class="btn btn-primary anotarme-btn centered-btn" value="Crear" @click="crearEvento" />
        </div>
      </form>
    </div>
  </div>
</template>
  
<style setup>
.crear-evento-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  margin: 36px 0;
}

.form-crear-evento input {
  min-width: 300px;
}

.form-field {
  align-items: center;
  gap: 8px;
}

.form-field label {
  min-width: 130px;
}
</style>
  
<script setup>

import { ref } from "vue";

const titulo = ref("");
const descripcion = ref("");
const precio = ref("");
const cantMax = ref("");
const fecha = ref("");


const crearEvento = () => {
  
  const datos = {
    titulo: titulo.value,
    descripcion: descripcion.value,
    precio: precio.value,
    fecha: fecha.value,
    cantidad: 0,
    cantidadMaxima: cantMax.value,
    estado:'ACTIVO'
  };

  let fecha2 = new Date(fecha.value)
  fecha2.setDate(fecha2.getDate() + 1);
  let fechaHoy = new Date();

  if (titulo.value === "" || descripcion.value === "" || precio.value === "" || fecha.value === "") {
    alert("Faltan completar datos");
  } if (precio.value < 0) {
    alert("El precio invalido");
    return;
  } if (cantMax.value <= 0) {
    alert("Cantidad maxima invalido");
    return;
  } if (fecha2 < fechaHoy) {
    alert("Me parece que quieres viajar en el tiempo");
    return;
  }

  
  const url = "https://652f152c0b8d8ddac0b233a9.mockapi.io/evento"; 

  
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
        throw new Error("Error en la solicitud");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Solicitud POST exitosa", data);
      window.location.replace("http://localhost:5173/eventos")
    })
    .catch((error) => {
      console.error("Error al enviar la solicitud POST", error);
    });
};
</script>
  
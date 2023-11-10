<template>
  <div class="card" style="width: 300px">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body">
      <h3 class="card-title">{{ evento.titulo }}</h3>
      <h5 class="card-text">{{ evento.descripcion }}</h5>
      <p class="card-text">Precio:${{ evento.precio }}</p>
      <p class="card-text">Fecha:{{ evento.fecha }}</p>
      <p class="card-text">
        Inscriptos:{{ evento.cantidad }}/{{ evento.cantMax }}
      </p>
      <div class="d-flex" style="justify-content: space-between">
        <input type="button" value="Anotarme" data-bs-toggle="modal" data-bs-target="#anotarseModal"
          class="btn btn-primary" :disabled="puedoAnotarme()" />
        <div>
          <button class="btn btn-primary" @click="openModal" v-if="soyAdmin">Abrir Modal</button>
          <div v-if="isModalOpen" class="modal-overlay-custom">
            <div class="modal-custom">
              <span class="close-custom-btn" @click="closeModal">X</span>
              <h2>{{ evento.titulo }} </h2><span>{{ evento.descripcion }}</span>
              <form>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Recipient:</label>
                  <input type="text" class="form-control" id="recipient-name">
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">Message:</label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
  .modal-overlay-custom {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .modal-custom {
    position: relative;
    background-color: #fff;
    padding: 20px;
    width: 500px;
    height: 500px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .close-custom-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
</style>
 
<script setup>

import { ref } from 'vue';

const evento = defineProps({
  id: Number,
  titulo: String,
  precio: Number,
  fecha: Date,
  descripcion: String,
  cantidad: Number,
  cantMax: Number,
  //Imagen: imagen
});
const puedoAnotarme = () => {
  return evento.cantidad >= evento.cantMax;
};

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
const soyAdmin = sessionStorage.getItem("nombre") === "ADMIN";

const anotarse = (event) => {
  anotarseEvento(event);
  anotarseUsuario(event);
};
const anotarseUsuario = (evento) => {
  console.log("SOY DIOS ")
}
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

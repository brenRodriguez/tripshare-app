<template>
  <div class="container">
    <h1>Elegí tu Evento</h1>

    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Filtrar eventos
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample">
          <div class="accordion-body filter">
            <div class="d-flex">
              <label>Titulo:</label> <input type="text" v-model="titulo" />
            </div>
            <div class="d-flex">
              <label>Precio:</label> <input type="number" v-model="precio" />
            </div>
            <div class="d-flex">
              <label>Descripcion:</label>
              <input type="text" v-model="descripcion" />
            </div>
            <div class="d-flex">
              <label>Fecha:</label> <input type="date" v-model="fecha" />
            </div>
            <input type="button" class="btn btn-primary" value="Buscar" @click="filtrar" />
            <input type="button" class="btn btn-primary" value="Limpiar" @click="limpiar" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="isLoading">
      <div class="d-flex  flex-column justify-content-center align-items-center" style="height: 500px;">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="d-flex" style="flex-wrap: wrap; justify-content: space-between; gap: 20px">
        <EventCard v-for="(evento, index) in eventosFiltrados" :key="index" :id="parseInt(evento?.id)" :titulo="evento?.titulo"
          :descripcion="evento?.descripcion" :precio="evento?.precio" :cantidad="evento?.cantidad" :fecha="evento?.fecha"
          :cantMax="evento?.cantidadMaxima">
        </EventCard>
      </div>
    </div>
  </div>
</template>

<style setup>
.filter {
  display: flex;
  justify-content: space-around;
}
#accordionFlushExample {
  margin-bottom: 32px;
}
</style>

<script setup>
import EventCard from "../components/EventCard.vue";
import { ref } from "vue";

var eventos = ref([]);
var eventosFiltrados = ref([]);

const titulo = ref("");
const descripcion = ref("");
const precio = ref("");
const fecha = ref("");
const isLoading = ref(true);



fetch("https://652f152c0b8d8ddac0b233a9.mockapi.io/evento")
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("No se pudo obtener la informacion");
    }
  })
  .then((data) => {
    console.log({data})
    eventosFiltrados.value = data.reverse();
    eventos.value = data;
    isLoading.value = false;
  })
  .catch((error) => {
    console.log(error);
  });

const filtrar = () => {
  eventosFiltrados.value = eventos.value.filter((evento) => {
    return evento.titulo === titulo.value || evento.descripcion === descripcion.value || evento.precio === precio.value ||
      evento.fecha === fecha.value;     
  }).reverse();
};
const limpiar = () => {
  eventosFiltrados.value = eventos.value;
}
</script>

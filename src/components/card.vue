<template>
  <div class="card" style="width: 300px;">
  <!-- <img src="..." class="card-img-top" alt="..."> -->
  <div class="card-body">
    <h3 class="card-title">{{ evento.titulo }}</h3>
    <h5 class="card-text">{{ evento.descripcion }}</h5>
    <p class="card-text">Precio:${{ evento.precio }}</p>
    <p class="card-text">Fecha:{{ evento.fecha }}</p>
    <p class="card-text">Inscriptos:{{ evento.cantidad }}</p>
    <a href="#" class="btn btn-primary">Anotarme</a>
  </div>
</div>

</template>

<script setup>
const evento = defineProps({
    titulo : String,
    precio : Number,
    fecha: Date,
    descripcion: String,
    cantidad: String,
    //Imagen: imagen
});

</script>
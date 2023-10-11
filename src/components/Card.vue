<template>
   <div class="card" style="width: 18rem;">
  <!-- <img src="..." class="card-img-top" alt="..."> -->
  <div class="card-body">
    <h5 class="card-title">{{ evento.titulo }}</h5>
    <p class="card-text">{{ evento.descripcion }}</p>
    <p class="card-text">${{ evento.precio }}</p>
    <p class="card-text">{{ evento.fecha }}</p>
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
    //Imagen: imagen
});

</script>
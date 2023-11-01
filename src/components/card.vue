<template>
  <div class="card" style="width: 300px;">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body">
      <h3 class="card-title">{{ evento.titulo }}</h3>
      <h5 class="card-text">{{ evento.descripcion }}</h5>
      <p class="card-text">Precio:${{ evento.precio }}</p>
      <p class="card-text">Fecha:{{ evento.fecha }}</p>
      <p class="card-text">Inscriptos:{{ evento.cantidad }}/{{ evento.cantMax }}</p>
      <input type="button" value="Anotarme" class="btn btn-primary" :disabled="puedoAnotarme()" @click="anotarse(evento)">
    </div>
  </div>
</template>

<script setup>
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
const puedoAnotarme = () =>{
  return evento.cantidad >= evento.cantMax;
}


const anotarse = (event) =>{

  const datos = {
      titulo: event.titulo,
      descripcion:  event.descripcion,
      precio:  event.precio,
      fecha:  event.fecha,
      cantidad: event.cantidad + 1,
      cantidadMaxima: event.cantMax 
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
      location.reload();
    })
    .catch((error) => {
      console.error("Error al enviar la solicitud POST", error);
    });
  };

</script>
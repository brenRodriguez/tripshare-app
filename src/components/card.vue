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
        <input
          type="button"
          value="Anotarme"
          data-bs-toggle="modal"
          data-bs-target="#anotarseModal"
          class="btn btn-primary"
          :disabled="puedoAnotarme()"
          />

        <input
          type="button"
          value="Ver participantes"
          class="btn btn-primary"
          size="sm" v-b-modal="'myModal'" e="'item'" 
          v-if="soyAdmin"/>

          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Open modal for @getbootstrap</button>
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
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
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
      </div>
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
const puedoAnotarme = () => {
  return evento.cantidad >= evento.cantMax;
};

const soyAdmin = sessionStorage.getItem("nombre") === "ADMIN";
const anotarse = (event) => {
  anotarseEvento(event);
  anotarseUsuario(event);
};
const anotarseUsuario = (evento) =>{
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

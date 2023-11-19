<template>
    <div class="form-anotarse">
        <h2>Anotarse a: {{ eventoActual?.titulo }}</h2>
        <div class="description-container container-scroll">
            <h4>Descripción del evento: {{ eventoActual?.descripcion }}</h4>
        </div>
        <form id="anotarse">
            <div class="form-group">
                <label for="recipient-name" class="col-form-label">Nombre y apellido:</label>
                <input type="text" class="form-control" id="recipient-name" v-model="nombre">
            </div>
            <div class="form-group">
                <label for="edad" class="col-form-label">Edad:</label>
                <input type="number" class="form-control" id="edad" v-model="edad">
            </div>
            <div class="form-group">
                <label for="message-text" class="col-form-label">E-Mail:</label>
                <input type="email" class="form-control" id="message-text" v-model="email"/>
            </div>
        </form>
        <button type="button" class="btn btn-primary anotarme-btn centered-btn"
            @click="anotarse(eventoActual)">Anotarme</button>
    </div>
</template>
  
<style scoped>
.form-anotarse {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.description-container {
    max-height: 50px;
    overflow-y: auto;
}
</style>
  
<script setup>
import { useModuloEvento } from '../store/evento';
import { ref } from 'vue';

const nombre = ref("");
const edad = ref();
const email = ref("");

const store = useModuloEvento();
const eventoActual = store.eventoSeleccionado;

const anotarse = (event) => {
    if (!nombre.value || !edad.value || !email.value) {
    alert("Por favor, completa todos los campos antes de anotarte.");
    return; 
  }
    anotarseEvento(event);
    anotarseUsuario(event);
};
const anotarseUsuario = (evento) => {

    const datosUsuario = {
        nombre: nombre.value,
        edad: edad.value,
        email: email.value,
        proyectId: evento.id,
    }

    const url = "https://652f152c0b8d8ddac0b233a9.mockapi.io/usuarios"; // Reemplaza con la URL correcta


    // Configuración de la solicitud
    const opciones = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // Puedes agregar encabezados adicionales si es necesario
        },
        body: JSON.stringify(datosUsuario),
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
            alert("REGISTRO EXITOSO!");

            setTimeout(() => {
                location.reload();
            }, "500");

        })
        .catch((error) => {
            console.error("Error al enviar la solicitud POST", error);
        });
};
</script>
<template>
    <div>
        <form id="anotarse">
            <div class="form-group">
                <label for="recipient-name" class="col-form-label">Nombre y apellido:</label>
                <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
                <label for="message-text" class="col-form-label">Mail</label>
                <textarea class="form-control" id="message-text"></textarea>
            </div>
        </form>
        <button type="button" @click="anotarse(eventoActual)">Anotarme</button>
    </div>
</template>
  
<style scoped></style>
  
<script setup>
import { useModuloEvento } from '../store/evento';

const store = useModuloEvento();
const eventoActual = store.eventoSeleccionado;

const anotarse = (event) => {
    anotarseEvento(event);
    anotarseUsuario(event);
};
const anotarseUsuario = (evento) => {
    console.log("anotar a usuario.....")
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
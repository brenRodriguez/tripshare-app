<template>
    <h2>{{ eventoSeleccionado?.titulo }} - Inscriptos</h2>
    <div>
        <table>
            <thead>
                <tr>
                    <th scope="col">Nombre y Apellido</th>
                    <th scope="col">Mail</th>
                    <th scope="col">Edad</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(inscripto, index) in inscriptos" :key="index">
                    <td data-label="Nombre y Apellido">{{ inscripto.nombre }}</td>
                    <td data-label="Mail">{{ inscripto.email }}</td>
                    <td data-label="Edad">{{ inscripto.edad }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
    
<style scoped>
table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
}

table caption {
    font-size: 1.5em;
    margin: .5em 0 .75em;
}

table tr {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: .35em;
}

table th,
table td {
    padding: .625em;
    text-align: center;
}

table th {
    font-size: .85em;
    letter-spacing: .1em;
    text-transform: uppercase;
}

@media screen and (max-width: 600px) {
    table {
        border: 0;
    }

    table caption {
        font-size: 1.3em;
    }

    table thead {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }

    table tr {
        border-bottom: 3px solid #ddd;
        display: block;
        margin-bottom: .625em;
    }

    table td {
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: .8em;
        text-align: right;
    }

    table td::before {
        /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
    }

    table td:last-child {
        border-bottom: 0;
    }
}
</style>
  
<script setup>

import { useModuloEvento } from '../store/evento';
import {ref} from 'vue';

const store = useModuloEvento();
const eventoSeleccionado = store.eventoSeleccionado;
const inscriptos = ref([]);

fetch("https://652f152c0b8d8ddac0b233a9.mockapi.io/usuarios")
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("No se pudo obtener la informacion");
    }
  })
  .then((data) => {
    inscriptos.value = data.filter(val=>val.proyectId == eventoSeleccionado.id);
  })
  .catch((error) => {
    console.log(error);
  });


/* const inscriptos = [
    { nombre: 'Carlos', apellido: 'Perez', mail: 'dfnsdjf@gmail.com', edad: 20 },
    { nombre: 'Sofia', apellido: 'Rodriguez', mail: 'sofia@hotmail.com', edad: 30 },
    { nombre: 'Ricardo', apellido: 'Lopez', mail: 'Ricardo@hotmail.com', edad: 27 },
    { nombre: 'Maria', apellido: 'Fernandez', mail: 'Maria@gmail.com', edad: 40 },
]; */


</script>
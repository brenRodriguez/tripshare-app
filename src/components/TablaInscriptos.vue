<template>
    <div>
        <h2>{{ eventoSeleccionado?.titulo }} - Inscriptos</h2>
        <div class="modal-inscriptos container-scroll">
            <template v-if="inscriptos.length === 0">
                <p>Aún no hay inscriptos para este evento.</p>
            </template>
            <template v-else>
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
                            <td data-label=""><button type="button" class="btn btn-danger" @click="eliminarInscripto(inscripto)">Eliminar</button></td>
                        </tr>
                    </tbody>
                </table>
            </template>
        </div>
    </div>
</template>

    
<style scoped>
.modal-inscriptos {
    max-height: 400px;
    overflow-y: auto;
}

table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
    margin-top: 24px;
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
import { ref } from 'vue';

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
        inscriptos.value = data.filter(val => val.proyectId == eventoSeleccionado.id);
    })
    .catch((error) => {
        console.log(error);
    });

    const  eliminarInscripto = (inscripto) => {
    const url = `https://652f152c0b8d8ddac0b233a9.mockapi.io/usuarios/${inscripto.id}`;

    const opciones = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    };

    fetch(url, opciones)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error en la solicitud");
            }
            return response.json();
        })
        .then((data) => {
            alert("ELIMINACION EXITOSA!");
            borrarseDeEvento(eventoSeleccionado)
            inscriptos.value  = inscriptos.value.filter(newInscripto => newInscripto.id != inscripto.id);
        })
        .catch((error) => {
            console.error("Error al enviar la solicitud POST", error);
        });
        
};

const borrarseDeEvento = (event) => {
  const datos = {
    titulo: event.titulo,
    descripcion: event.descripcion,
    precio: event.precio,
    fecha: event.fecha,
    cantidad: event.cantidad - 1,
    cantidadMaxima: event.cantMax,
    estado:'ACTIVO'
  };
  const url = `https://652f152c0b8d8ddac0b233a9.mockapi.io/evento/${event.id}`;

  const opciones = {
    method: "PUT",
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
    })
    .catch((error) => {
      console.error("Error al enviar la solicitud POST", error);
    });
};
</script>
<template>
  <div class="container todo">
    <h1>Estadisticas</h1>
    <div class="modal-inscriptos container-scroll">
            <template v-if="eventos.length === 0">
                <p>Aún no hay inscriptos para este evento.</p>
            </template>
            <template v-else>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Estado de evento</th>
                            <th scope="col">Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>ACTIVO</td>
                            <td>{{ getCantidadActivos() }}</td>
                        </tr>
                        <tr>
                          <td>INACTIVO</td>
                          <td> {{ getCantidadInActivos()}}</td>
                        </tr>
                    </tbody>
                </table>
            </template>
        </div>
  </div>
    
</template>

<style setup>
.todo {
  padding: 20px;
}

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
import { ref } from "vue";

var eventos = ref([]);
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
    eventos.value = data;
    isLoading.value = false;
  })
  .catch((error) => {
    console.log(error);
  });

  
  const getCantidadActivos = () => {
    return eventos.value.filter(event => event.estado == 'ACTIVO').length
  }

  const getCantidadInActivos = (estado) => {
    return eventos.value.length - getCantidadActivos()
  }
</script>

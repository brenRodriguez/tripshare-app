<template>
    <h1>Elegi tu EVENTO</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quam a quos, quae reprehenderit tempora ipsam ex
        iste labore sed sunt, libero suscipit sint minima harum dolores ducimus excepturi illo.</p>

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
                <div class="accordion-body filter" >
                    <input type="text">
                    <input type="number">
                    <input type="number">
                    <input type="date">
                    <input type="button" class="btn btn-primary" value="Buscar"> 
                </div>
            </div>
        </div>
    </div>

    <Card></Card>

</template>

<style setup>

.filter {
    display: flex;
    justify-content: space-around;
}

</style>

<script setup>
import { ref } from 'vue'
import Card from '../components/Card.vue'


</script>

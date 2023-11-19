<template>
    <div class="showcase">
        <a class="travel-card">
            <div class="image">
                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
            </div>
            <div class="content">
                <label class="category">{{ evento.titulo }}</label>
                <h2 class="topic">{{ evento.descripcion }}</h2>
                <div class="recommendation">
                    <div class="score">
                        <span>{{ evento.fecha }}</span>
                    </div>
                    <div class="comment">({{ evento.cantidad }}/{{ evento.cantMax }} Inscriptos)</div>
                </div>
                <div class="price">
                    <div class="original-price">${{ evento.precio }}</div>
                    <div class="d-flex" style="gap: 4px;">
                        <button class="btn btn-primary anotarme-btn" :disabled="puedoAnotarme()"
                            @click="openModal(FormInscripcion, evento)">Anotarme</button>
                        <button v-if="soyAdmin" class="btn btn-primary inscriptos-btn"
                            @click="openModal(TablaInscriptos, evento)">Ver
                            inscriptos</button>
                    </div>
                </div>
            </div>
            <div>
                <div v-if="isModalOpen" class="modal-overlay-custom">
                    <div class="modal-custom">
                        <span class="close-custom-btn" @click="closeModal">X</span>
                        <component :is="currentComponent" />
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>
  
  
<style>
.modal-overlay-custom {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

.inscriptos-btn {
    background-color: #3F9A82;
    border: 1px solid #3F9A82;
    font-weight: 600;
}

.inscriptos-btn:hover {
    background-color: #1bbc9b;
    border: 1px solid #1bbc9b;
}

.modal-custom {
    position: relative;
    background-color: #fff;
    padding: 20px;
    width: 850px;
    height: 500px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    color: #000000;
}

.close-custom-btn {
    position: absolute;
    font-size: 24px;
    top: 10px;
    right: 14px;
    cursor: pointer;
}

.close-custom-btn:hover {
    font-weight: 600;
}

.showcase {
    background-color: #fefefe;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.travel-card {
    position: relative;
    display: inline-flex;
    flex-flow: column nowrap;
    font-weight: 300;
    background-color: white;
    box-shadow: 0px 0px 100px -10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    width: 370px;
    text-decoration: none;

    &:hover>.button-favorite {
        display: inline-flex;
    }

    &:hover>.image>img {
        transform: scale(1.2);
    }

    & .image {
        width: 100%;
        height: 250px;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;

        &>img {
            width: 100%;
            height: 100%;
            background-image: url('https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/467829_Viator_Unsplash_170410.jpg');
            background-position: center;
            background-size: cover;
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
            transition: all .28s ease-in-out;
        }
    }

    &>.content {
        color: #545454;
        padding: 1em 1.5em;

        &> :nth-child(1n+2) {
            margin-top: 1em;
        }

        &>.category {
            font-size: 1.2em;
            color: #bababa;
        }

        &>.topic {
            font-size: 1.3em;
            line-height: calc(1rem * 2.8);
            word-break: break-all;
            max-height: calc(1rem * 2.8 * 2);
            overflow: hidden;
            position: relative;
            background-color: white;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        &>.recommendation {
            display: flex;
            align-items: center;

            &>.score {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                background: rgb(254, 207, 139);
                background: linear-gradient(130deg, rgba(254, 207, 139, 1) 0%, rgba(255, 198, 115, 1) 75%, rgba(255, 187, 88, 1) 100%);
                color: white;
                padding: 6px 12px;
                border-radius: 30px;
                user-select: none;

                &> :first-child {
                    padding-top: 1px;
                    padding-left: 4px;
                }

                &> :last-child {
                    font-size: 1.1em;
                    padding-left: 6px;
                }
            }

            &>.comment {
                color: #bababa;
                margin-left: 1.5em;
            }
        }

        &>.price {
            display: flex;
            justify-content: space-between;
            align-items: center;


            &>.original-price {
                font-size: 2em;
            }
        }
    }

    &>.button-favorite {
        width: 2.8em;
        height: 2.8em;
        display: none;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 20px;
        right: 20px;
        background-color: white;
        color: #bababa;
        border-radius: 50%;
        box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, .1);
        user-select: none;

        &:hover> :first-child {
            display: none;
        }

        &:hover> :last-child {
            display: block;
        }

        &>i {
            font-size: 1.8em;
            padding-top: 2px;
        }

        &> :last-child {
            display: none;
            color: #ff5a60;
        }
    }
}
</style>
   
<script setup>
import { ref } from 'vue';
import TablaInscriptos from "./TablaInscriptos.vue";
import FormInscripcion from "./FormAnotarse.vue";
import { useModuloEvento } from '../store/evento';

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
const store = useModuloEvento();
const puedoAnotarme = () => {
    return evento.cantidad >= evento.cantMax;
};

const isModalOpen = ref(false);
const currentComponent = ref(null);

const openModal = (componentName, event) => {
    store?.setEventoSeleccionado(event);
    isModalOpen.value = true;
    currentComponent.value = componentName;
};

const closeModal = () => {
    isModalOpen.value = false;
};
const soyAdmin = sessionStorage.getItem("nombre") === "ADMIN";


</script>
  
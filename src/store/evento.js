import { defineStore } from 'pinia';

 
export const useModuloEvento = defineStore('store', {
  state: () => ({
    eventoSeleccionado: {},
  }),
  actions: {
    setEventoSeleccionado(nuevoEstado) {

      this.eventoSeleccionado = nuevoEstado;
    },
  },
});

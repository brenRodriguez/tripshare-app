import { defineStore } from 'pinia';

export const useEventoStore = defineStore('eventoSeleccionado', {
  state: () => ({
    eventoSeleccionado: { /* datos del evento */ },
  }),
  // getters, mutations, acciones, etc.
});
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tareas: []
  },
  mutations: {
    grabarLocalStorage() {
      window.localStorage.setItem("tareas", JSON.stringify(store.state.tareas));
    }
  }
});

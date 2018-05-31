<template>
  <div>
    <headercomp>TodoList</headercomp>
    <anadirTarea></anadirTarea>
    <verTareas></verTareas>
    <footerComp></footerComp>
  </div>
</template>

<script>
import headercomp from "./components/HeaderComp.vue";
import anadirTarea from "./components/AnadirTarea.vue";
import verTareas from "./components/VerTareas.vue";
import footerComp from "./components/footerComp.vue";
import { store } from "./store.js";

export default {
  components: {
    headercomp,
    anadirTarea,
    verTareas,
    footerComp
  },
  store,
  created() {
    if (localStorage.getItem("tareas")) {
      this.$store.state.tareas = JSON.parse(localStorage.getItem("tareas"));
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto");

body {
  background-color: #1e1e1e;
}

* {
  font-family: "Roboto", sans-serif;
  margin: 0px;
  padding: 0px;
}
</style>

<style lang="scss">
</style>

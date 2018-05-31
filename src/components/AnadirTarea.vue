<template>
    <div>
        <input type="text" v-model="textTarea" @keyup.enter="anadir()" placeholder="Nueva Tarea" :maxlength="longitud" >
    </div>
</template>

<script>
export default {
  name: "anadirTarea",
  data() {
    return {
      textTarea: ""
    };
  },
  methods: {
    anadir() {
      this.$store.state.tareas.push({
        nombre: this.textTarea,
        prioridad: false,
        completada: false
      });
      this.textTarea = "";

      this.$store.commit("grabarLocalStorage");
    }
  },
  computed: {
    longitud() {
      return screen.width / 17;
    }
  }
};
</script>

<style scoped lang="scss">
input {
  width: 40vw;
  height: 50px;
  font-size: 24px;
  margin: 85px auto 30px auto;
  transition: 0.3s linear;
  padding-left: 15px;
  display: block;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 22px;
  }
  &:focus {
    width: 80vw;
  }
}
</style>

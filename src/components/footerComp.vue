<template>
    <footer>
        <p>Totales: <span>{{total}}</span></p>
        <p>Sin completar: <span>{{sinCompletar}}</span></p>
        <p>Completadas: <span>{{completada}}</span></p>
    </footer>
</template>

<script>
export default {
  name: "footerComp",
  computed: {
    total() {
      if (this.$store.state.tareas) {
        return this.$store.state.tareas.length;
      } else {
        return 0;
      }
    },
    sinCompletar() {
      var contador = 0;
      if (this.$store.state.tareas) {
        this.$store.state.tareas.forEach(tarea => {
          if (tarea.completada == false) {
            contador++;
          }
        });
      }
      return contador;
    },
    completada() {
      var contador = 0;
      if (this.$store.state.tareas) {
        this.$store.state.tareas.forEach(tarea => {
          if (tarea.completada) {
            contador++;
          }
        });
      }
      return contador;
    }
  }
};
</script>

<style scoped lang="scss">
footer {
  position: fixed;
  width: 100%;
  height: 30px;
  bottom: 0;
  background-color: whitesmoke;
  border-top: 3px solid #42b884;
  display: flex;
  align-items: center;
  justify-content: left;
  p {
    margin: 0 15px;
    color: #35495e;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    justify-content: space-around;
  }
}
</style>

<template>
    <div class="tareas">
        <ul>
          
          <draggable :list="$store.state.tareas">
            <transition-group name="slide-fade">
                <li v-for="(tarea, key) in $store.state.tareas" :key="key">
                  <!-- <template v-if="tarea.nombre.length <= 10"> -->
                    <span :class="{completada: tarea.completada}">{{tarea.nombre | upperCase }}</span>
                    <div>
                        <boton color="green" @click.native="completarTarea(key)">V</boton>
                        <boton color="red" @click.native="eliminarTarea(key)">X</boton>
                    </div>
                  <!-- </template> -->
                  
                  <!-- <template v-else>
                    <span><span :class="{completada: tarea.completada}">{{tarea.nombre.slice(0,10) | upperCase }}...</span></span>
                    <div>
                      <boton color=blue @click="mostrarMas(key)">+</boton>
                    </div>
                  </template> -->
                </li>
            </transition-group>
          </draggable>

        </ul>
    </div>
</template>

<script>
import boton from "./generales/Botones";
import draggable from "vuedraggable";

export default {
  name: "verTareas",
  components: { boton, draggable },
  methods: {
    eliminarTarea(key) {
      this.$store.state.tareas.splice(key, 1);
      this.$store.commit("grabarLocalStorage");
    },

    completarTarea(key) {
      this.$store.state.tareas[key].completada = !this.$store.state.tareas[key]
        .completada;
      this.$store.commit("grabarLocalStorage");
    }
  },
  filters: {
    upperCase(tarea) {
      tarea.toString();
      return tarea[0].toUpperCase() + tarea.slice(1, tarea.length);
    }
  }
};
</script>

<style scoped lang="scss">
.tareas {
  margin-bottom: 35px;
}
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  li {
    width: 80vw;
    height: 40px;
    border: 1px solid black;
    box-shadow: 1px 1px 6px rgba(39, 39, 39, 0.473);
    font-size: 36px;
    margin-bottom: 15px;
    padding: 10px 35px;
    color: #1e1e1e;
    background-color: whitesmoke;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 480px) {
      width: 75vw;
      font-size: 18px;
      height: 22px;
      padding: 10px 16px;
    }
  }
}

.completada {
  text-decoration-line: line-through;
  color: #6e6e6e;
}

.slide-fade-enter-active {
  transition: all 0.3s linear;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(-100px);
  opacity: 0;
}
</style>

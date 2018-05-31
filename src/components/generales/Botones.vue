<template>
    <button :class="`bg-${color}`" class="btn" color="color">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: "boton",
  props: ["color"]
};
</script>

<style scoped lang="scss">
$bg-blue: #2196f3;
$bg-red: rgb(248, 104, 94);
$bg-green: rgb(99, 197, 103);
$bg-yellow: #ffeb3b;
$bg-pink: #ff4081;
$bg-orange: #ff5722;

$font-roboto: "Roboto", sans-serif;

.btn {
  color: white;
  cursor: pointer;
  border: {
    style: none;
    radius: 2px;
  }
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
  font: {
    family: $font-roboto;
    size: 20px;
  }
  height: 40px;
  padding: 8px 16px;
  margin-bottom: 5px;
  margin-left: 5px;
  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 480px) {
    height: 26px;
    width: 26px;
    padding: 4px 8px;
    font-size: 18px;
    margin-bottom: 0;
  }
}

.bg-green {
  background-color: $bg-green;
}

.bg-blue {
  background-color: $bg-blue;
}

.bg-red {
  background-color: $bg-red;
}

.bg-orange {
  background-color: $bg-orange;
}

.bg-pink {
  background-color: $bg-pink;
}

.bg-yellow {
  background-color: $bg-yellow;
  color: rgba(0, 0, 0, 0.87);
}
</style>

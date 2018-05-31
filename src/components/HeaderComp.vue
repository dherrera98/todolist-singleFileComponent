<template>
    <header>
        <h1>
            <slot></slot>
        </h1>
    </header>
</template>

<script>
export default {
  name: "HeaderComp"
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  background-color: whitesmoke;
  height: 50px;
  position: fixed;
  border-bottom: 5px solid #42b884;
  top: 0;

  h1 {
    text-align: center;
    font-size: 36px;
    line-height: 50px;
    margin: 0;
    color: rgb(45, 114, 84);
  }
}
</style>

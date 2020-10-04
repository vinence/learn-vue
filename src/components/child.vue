<template>
  <section>
    <header>
      <p>父传子： props</p>
      <p>子传父： $emit</p>
    </header>
    <article>
      <button @click="$emit('decrease')">-</button> <span>{{num}}</span> <button @click="$emit('increase')">+</button>
    </article>
  </section>
</template>

<script>
export default {
  name: "Child",
  props: {
    num: {
      type: Number,
      require: true,
      default: 0
    }
  }
}
</script>

<style scoped>
header{
  background-color: #2c3e50;
  color: aliceblue;
  padding: 20px;
}
article {
  background-color: blanchedalmond;
  margin-top: 20px;
  min-height: 200px;
  padding: 20px;
}
</style>

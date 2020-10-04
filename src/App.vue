<template>
  <div id="app">
    <child :num="num">
      <template slot="decrease">
        <button @click="handleDecrease">-</button>
      </template>
      <template slot="increase">
        <button @click="handleIncrease">+</button>
      </template>
    </child>

  </div>
</template>

<script>
import Child from '@/components/child'
export default {
  name: 'App',
  components: {Child},
  data(){
    return{
      num: 0
    }
  },
  methods: {
    handleDecrease(){
      this.$children[0].childNum--
    },
    handleIncrease(){
      this.$children[0].childNum++
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

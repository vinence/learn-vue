<template>
  <div id="app">
    <child-a :num1="num1" :num2="num2" :num3="num3" @increase="handleIncrease" @decrease="handleDecrease"/>
  </div>
</template>

<script>
import ChildA from '@/components/childA'
export default {
  name: 'App',
  components: {ChildA},
  data(){
    return{
      num1: 0,
      num2: 1,
      num3: 2,
    }
  },
  methods: {

    // 累加
    handleIncrease(){
      this.num1++
      this.num2++
      this.num3++
    },

    // 累减
    handleDecrease(){
      this.num1--
      this.num2--
      this.num3--
    },
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

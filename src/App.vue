<template>
  <div id="app">
    <class-demo/>
  </div>
</template>

<script>
import ClassDemo from "@/components/ClassDemo";
export default {
  name: 'App',
  components: {ClassDemo},
  data(){
    return{
      num: 0
    }
  },
  methods: {

    // 累加
    handleIncrease(){
      this.num++
    },

    // 累减
    handleDecrease(){
      this.num--
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

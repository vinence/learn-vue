<template>
  <div id="app">
    <child :num="num" @increase="handleIncrease" @decrease="handleDecrease"/>
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

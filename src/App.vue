<template>
  <div id="app">
    <v-model v-model="inputValue"/>
  </div>
</template>

<script>
import VModel from '@/components/VModel'
export default {
  name: 'App',
  components: {VModel},
  data(){
    return{
      inputValue: '123'
    }
  },
  watch: {
    inputValue(newVal, oldVal){
      console.log('watch newVal', newVal, 'watch oldVal', oldVal);
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

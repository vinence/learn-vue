<template>
  <div id="app">
    <child :num="num"/>
  </div>
</template>

<script>
import Child from './components/Child'

export default {
  name: 'App',
  components: {Child},
  data(){
    return{
      num: 0
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

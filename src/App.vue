<template>
  <div id="app">
    <grand-father/>
    <button @click="changeMsg('app消息')">App消息</button>
  </div>
</template>

<script>
import GrandFather from '@/components/GrandFather'

export default {
  name: 'App',
  components: {GrandFather},
  provide() {
    return {
      obj: this.obj,
      changeMsg: this.changeMsg
    }
  },
  data() {
    return {
      obj:{
        msg: 'app消息'
      }
    }
  },
  methods: {

    changeMsg(msg) {
      this.obj.msg = msg
      console.log('change msg',this.obj.msg);
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

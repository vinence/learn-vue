<template>
  <div id="app">
    <parent ref="parent" :num="num">
      <template v-slot:parentDecrease>
        <button @click="handleChildDecrease">-</button>
      </template>
      <template v-slot:parentIncrease>
        <button @click="handleChildIncrease">+</button>
      </template>
    </parent>
  </div>
</template>

<script>
import Parent from "@/components/Parent";
export default {
  name: 'App',
  components: {Parent},
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
    handleChildIncrease(){
      this.$refs.parent.$refs.child.childNum++
    },
    handleChildDecrease(){
      this.$refs.parent.$refs.child.childNum--
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

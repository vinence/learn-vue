<template>
  <div id="app">
    <div class="description">
      中央事件总线适用于： 兄弟组件 跨层级组件
    </div>
    <child1 ref="child1" @hook:mounted="child1Mounted"/>
    <br>
    <br>
    <br>
    <child2 ref="child2" @hook:mounted="child2Mounted"/>
  </div>
</template>

<script>
import Child1 from '@/components/child1'
import Child2 from '@/components/child2'

export default {
  name: 'App',
  components: {Child1, Child2},
  methods: {
    child1Mounted() {
      console.log('child1 ref', this.$refs.child1);
    },
    child2Mounted() {
      console.log('child2 ref', this.$refs.child2);
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

.description {
  background-color: azure;
  min-height: 70px;
  line-height: 22px;
  font-size: 20px;
  padding: 20px;
  margin-bottom: 20px;
}
</style>

<template>
  <section>
    <header>
      <p>Vue 子组件可以通过 $root 属性访问根实例的属性和方法</p>
      <p>Vue 子组件可以通过 $parent属性访问父组件实例的属性和方法</p>
      <p>通过在子组件标签定义 ref 属性，在父组件中可以使用$refs 访问子组件实例</p>
    </header>
    <article>
      <div>parent 案例：<button @click="handleParentDecrease">-</button> <span>{{$attrs.num}}</span> <button @click="handleParentIncrease">+</button></div>
      <div>root 案例： <button @click="handleRootDecrease">-</button> <span>{{$attrs.num}}</span> <button @click="handleRootIncrease">+</button></div>
      <div>ref 案例：  <slot name="childDecrease"/><span>{{childNum}}</span><slot name="childIncrease"/></div>
    </article>
  </section>
</template>

<script>
export default {
  name: "Child",
  data(){
    return{
      childNum: 0,
    }
  },
  methods: {
    handleParentDecrease(){
      this.$parent.handleDecrease()
    },
    handleParentIncrease(){
      this.$parent.handleIncrease()
    },
    handleRootDecrease(){
      this.$root.$children[0].handleDecrease()
    },
    handleRootIncrease(){
      this.$root.$children[0].handleIncrease()
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

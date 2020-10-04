<template>
  <section>
    <header>
      <p>在子组件内部可以直接通过$parent对父组件进行操作</p>
      <p>在父组件通过$children对子组件进行操作</p>
    </header>
    <article>
      <div>
        <slot name="decrease"></slot>
        <span>子组件num：{{ childNum }}</span>
        <slot name="increase"></slot>
      </div>
     <div>
       <button @click="$parent.num--">-</button>
       <span>父组件num：{{num}}</span>
       <button @click="$parent.num++">+</button>
     </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "Child",
  props: {
    num: {
      type: Number,
      require: true,
      default: 0
    }
  },
  data(){
    return{
      childNum: 0
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

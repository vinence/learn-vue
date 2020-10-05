<template>
  <section>
    <header>
      <p>vuex： Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。</p>
      <p>state：存储数据，存储状态；在根实例中注册了store 后，用 this.$store.state
        来访问；对应vue里面的data；存放数据方式为响应式，vue组件从store中读取数据，如数据发生变化，组件也会对应的更新。</p>
      <p>getter：可以认为是 store 的计算属性，它的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。</p>
      <p>mutation：更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。</p>
      <p>action：包含任意异步操作，通过提交 mutation 间接更变状态。</p>
      <p>module：将 store 分割成模块，每个模块都具有state、mutation、action、getter、甚至是嵌套子模块。</p>
    </header>
    <article>
      <button @click="setNumMutation(stateNum-1)">-</button>
      <span>stateNum: {{ stateNum }}</span> <span>getterNum: {{ getterNum }}</span>
      <button @click="setNumAction(getterNum+1)">+</button>
    </article>
  </section>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: "Child",
  computed: {
    ...mapState({stateNum: state => state.num.num}),
    ...mapGetters({getterNum: 'num'}),
  },
  methods: {
    ...mapMutations({setNumMutation: 'SET_NUM'}),
    ...mapActions({setNumAction: 'setNum'})
  }
}
</script>

<style scoped>
header {
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

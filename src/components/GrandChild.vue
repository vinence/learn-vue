<template>
  <section>
    <header>
      <p>provide 和 inject 主要在开发高阶插件/组件库时使用。并不推荐用于普通应用程序代码中。</p>
      <p>provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。</p>
    </header>
    <article>
      <div>来自app的消息： {{ obj.msg }}</div>
      <button @click="handleChangeMsg">改变消息</button>
    </article>
  </section>

</template>

<script>
export default {
  name: "GrandChild",
  inject: ['obj','changeMsg'],
  // inject: {
  //   obj: {
  //     from: 'obj',
  //     default: '默认消息'
  //   },
  //   changeMsg: 'changeMsg'
  // },
  methods: {
    handleChangeMsg(){
      this.changeMsg('来自孙组件的消息')
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

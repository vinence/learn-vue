<template>
  <section>
    <header>
      <p>父组件通过v-model传递值给子组件时，会自动传递一个value的prop属性，在子组件中通过this.$emit(‘input',val)自动修改v-model绑定的值</p>
      <p>有三种写法</p>
      <p>写法一： value 配合 input事件</p>
      <p>写法二： model自定义value和事件名</p>
      <p>写法二： $attrs 配合 input事件</p>
    </header>
    <article>
      <label for="input">
        v-model input:
        <!--        ----------------------------- 写法一 ---------------------------------- -->
        <!--        <input id="input" type="text" :value="value" @input="$emit('input', $event.target.value)">-->
        <!--        ----------------------------- 写法二 ---------------------------------- -->
        <input id="input" type="text" :value="text1" @input="$emit('change1', $event.target.value)"/>
        <!--        ----------------------------- 写法三 ---------------------------------- -->
        <!--        <input id="input" type="text" v-bind="$attrs" @input="$emit('input', $event.target.value)">-->
      </label>
    </article>
  </section>
</template>

<script>
export default {
  name: "VModel",
  // ----------------------- 写法一 -------------------------------------
  // props: {
  //   value: {
  //     type: [Number,String,null],
  //     require: true,
  //     default: 0
  //   }
  // }

  // ---------------------- 写法二 -------------------------------------
  model: {
    prop: 'text1', // 对应 props text1
    event: 'change1'
    // 1. 上面的 emit事件名 和 model.event 要对应起来
    // 2. 上面的 value 和 model.prop 要对应起来
  },
  props: {
    text1: {
      type: [Number, String, null],
      require: true,
      default() {
        return ''
      }
    }
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

<template>
  <section>
    <header>
      <p>vue2.4新增 $attrs 和 $listeners</p>
      <hr>
      <p>v-bind="$attrs"</p>
      <p>包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。</p>
      <p>$attrs只代表的是那些没有被声明为props的属性，如果某个prop被子组件声明了（就是这个属性已经在子组件的props中了），在子组件中的$attr会把声明的prop剔除。</p>
      <p>个人理解： 一个组件在父组件中被引用，$attrs就是组件标签上的静态属性值（attr）和动态属性值（：attr）的对象集合，这个集合不包含class， style和事件属性</p>
      <hr>
      <p>v-on="$listeners"</p>
      <p>包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过v-on=”$listeners”传入内部组件。 归纳起来也是两点：</p>
      <p>1. $listeners是组件的内置属性，它的值是父组件(不含.native修饰器的) v-on事件监听器。</p>
      <p>2. 组件可以通 过在自己的子组件上使用v-on=”$listeners”，进一步把值传给自己的子组件。如果子组件已经绑定$listener中同名的监听器，则两个监听器函数会以冒泡的方式先后执行。</p>
    </header>
    <article>
      <main>
        <div>input 案例</div>
        <base-input class="test-input" type="text" placeHolder="请输入密码" v-model="password"/>
      </main>
      <main style="margin-top: 20px">
        <div>button 案例</div>
        <button @click="$emit('decrease')">-</button> <span>{{$attrs.num1}}</span> <span>{{$attrs.num2}}</span> <span>{{$attrs.num3}}</span><button @click="$emit('increase')">+</button>
      </main>
    </article>
  </section>
</template>

<script>
import BaseInput from "@/components/BaseInput";
export default {
  name: "ChildB",
  components: {BaseInput},
  data(){
    return {
      password: '123'
    }
  },
  watch: {
    password(newVal, oldVal){
      console.log('password newVal',newVal, 'password oldVal', oldVal);
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
.test-input {
  background-color: azure;
}
</style>

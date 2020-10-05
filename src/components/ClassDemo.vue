<template>
  <div>
    <p :class="{ black: isBlack, yellow: isYellow }">对象形式使用 class</p>
    <p :class="isBlack ? black : yellow">三元表达式形式使用 class</p>
    <p :class="[black, yellow]">数组形式使用 class</p>
    <p :style="styleData">对象形式使用 style</p>
    <p :style="{backgroundColor: isYellow ? 'yellow': '#5c5c5c'}">三元表达式使用 style</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBlack: true,
      isYellow: true,

      black: 'black',
      yellow: 'yellow',

      styleData: {
        fontSize: '40px', // 转换为驼峰式
        color: 'red',
        backgroundColor: '#ccc' // 转换为驼峰式
      }
    }
  }
}
</script>

<style scoped>
.black {
  background-color: #999;
}

.yellow {
  color: yellow;
}
</style>

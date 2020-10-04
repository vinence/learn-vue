<template>
  <input class="input-style" v-bind="$attrs" @input="$emit('input', $event.target.value)"/>
</template>

<script>
export default {
  name: "BaseInput",
  inheritAttrs: false
}
</script>

<style scoped>
.input-style{
  width: 200px;
}
</style>

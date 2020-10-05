<template>
  <child ref="child" v-bind="$attrs">
    <template v-slot:childDecrease>
      <slot name="parentDecrease"/>
    </template>
    <template v-slot:childIncrease>
      <slot name="parentIncrease"></slot>
    </template>
  </child>
</template>

<script>
import Child from "@/components/child";

export default {
  name: "Parent",
  components: {Child},
  methods: {
    handleIncrease(){
      this.$parent.handleIncrease()
    },
    handleDecrease(){
      this.$parent.handleDecrease()
    }
  }
}
</script>

<style scoped>

</style>

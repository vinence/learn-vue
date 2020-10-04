<template>
  <child-b v-bind="$attrs" v-on="$listeners"/>
</template>

<script>
import ChildB from '@/components/childB'
export default {
  name: "ChildA",
  components: {ChildB},
}
</script>

<style scoped>

</style>

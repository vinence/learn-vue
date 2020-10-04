<template>
  <section>
    <header>
      child2
    </header>
    <article>
      <label>
        <input type="text" v-model="child1" @input="$bus.emit('child1Change', $event.target.value)"/>
      </label>
      <div>{{ child2 }}</div>
    </article>
  </section>
</template>

<script>
export default {
  name: "Child2",
  data() {
    return {
      child1: 'child1信息',
      child2: 'child2信息'
    }
  },
  mounted() {
    console.log('child1 mounted');
    this.$bus.on('child2Change', (child2) => {
      this.child2 = child2
    })
    this.$once('hook:beforeDestroy', ()=>{
      this.$bus.off('child2Change')
    })
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

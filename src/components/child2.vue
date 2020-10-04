<template>
  <section>
    <header>
      child2
    </header>
    <article>
      <label>
        <input type="text" v-model="child2" @input="$bus.emit('child2Change', $event.target.value)"/>
      </label>
      <div>来自child1的信息： {{ child1 }}</div>
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
    console.log('child2 mounted');
    this.$bus.on('child1Change', (child1) => {
      this.child1 = child1
    })
    this.$once('hook:beforeDestroy', ()=> {
      this.$bus.off('child1Change')
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

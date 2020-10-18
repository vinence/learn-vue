<template>
  <div>
    <p>num {{num}}</p>
    <p>double1 {{double1}}</p>
    <p>double2 {{double2}}</p>
    <p>
      只允许输入数字:
      <input v-model.number="num" />
    </p>
    <p>
      懒加载:
      <input v-model.lazy="double2" />
    </p>
    <p>
      数字并且懒加载:
      <input v-model.number.lazy="double2" />
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 20,
    };
  },
  computed: {
    double1() {
      return this.num * 2;
    },
    double2: {
      get() {
        return this.num + this.double1;
      },
      set(val) {
        // eslint-disable-next-line no-console
        this.num = val;
      },
    },
  },
};
</script>

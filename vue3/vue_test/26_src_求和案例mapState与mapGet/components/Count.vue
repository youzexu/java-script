<template>
  <div>
    <h1>当前求和为{{ sum }}</h1>
    <h3>当前的和放大10倍为{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <select v-model.number="n">
      <!-- :value="n" '也可以 -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addOdd">当前为奇数再加</button>
    <button @click="addLater">等一等再加</button>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1,//用户选择

    }
  },
  computed: {
    // he() {
    //   return this.$store.state.sum
    // },
    // bigSum() {
    //   return this.$store.getters.bigSum
    // },
    // },
    // school() {
    //   return this.$store.state.school
    // },
    // subject() {
    //   return this.$store.state.subject
    // },
    // ...mapState({
    //   he: 'sum',
    //   bigSum: 'bigSum',
    //   xuexiao: 'school',
    //   xueke: 'subject'
    // }),
    //借助mapState生成计算属性从state中获取数据（数组写法）
    ...mapState([
      'sum',
      'school',
      'subject'
    ]),
    ...mapGetters([
      'bigSum'
    ])
  },
  methods: {
    add() {
      this.$store.dispatch('jia', this.n)
    },
    sub() {
      this.$store.dispatch('jian', this.n)
    },
    addOdd() {
      if (this.$store.state.sum % 2) {
        this.$store.dispatch('jia', this.n)
      }
    },
    addLater() {
      setTimeout(() => {
        this.$store.dispatch('jia', this.n)
      }, 500)
    }
  },
}
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
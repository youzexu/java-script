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
    <button @click="add(n)">+</button>
    <button @click="sub(n)">-</button>
    <button @click="addOdd(n)">当前为奇数再加</button>
    <button @click="addLater(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters,mapMutations,mapActions } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1,//用户选择

    }
  },
  computed: {
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
    // add() {
    //   this.$store.commit('JIA', this.n)
    // },
    // sub() {
    //   this.$store.commit('JIAN', this.n)
    // },
    // 借助mapMutations生成方法，会调用commit去联系mutations(对象写法)
    ...mapMutations({add:'JIA', sub:'JIAN'}),


    // addOdd() {
    //   this.$store.dispatch('jiaOdd', this.n)
    // },
    // addLater() {
    //   this.$store.dispatch('jiaWait', this.n)
    // }
    //（对象写法）
    ...mapActions({addOdd:'jiaOdd', addLater:'jiaWait'})
  }
}
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
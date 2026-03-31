<template>
  <div>
    <h1>当前求和为{{ sum }}</h1>
    <h3>当前的和放大10倍为{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <h3 style="color: red;">下方组件的总人数是{{ personList.length }}</h3>
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
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1,//用户选择
    }
  },
  computed: {
    //借助mapState生成计算属性从state中获取数据（数组写法）
    ...mapState(['sum', 'school', 'subject','personList']),
    ...mapGetters(['bigSum'])
  },
  methods: {
    // 借助mapMutations生成方法，会调用commit去联系mutations(对象写法)
    ...mapMutations({ add: 'JIA', sub: 'JIAN' }),
    //（对象写法）
    ...mapActions({ addOdd: 'jiaOdd', addLater: 'jiaWait' })
  },
  mounted() {
    console.log('mounted', this.sum)
  }
}
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
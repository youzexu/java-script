<template>
  <div>
    <h1>当前求和为{{ sum }}</h1>
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
export default {
  name: 'Count',
  data() {
    return {
      n: 1,//用户选择
      sum: 0//当前的和
    }
  },
  methods: {
    add() {
      this.sum += this.n;
    },
    sub() {
      this.sum -= this.n;
    },
    addOdd() {
      if (this.sum % 2) {
        this.sum += this.n;
      }
    },
    addLater() {
      setTimeout(() => {
        this.sum += this.n;
      }, 500)
    }
  }

}
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
      <span>{{ todo.title }}</span>
    </label>
     <button class="btn btn-danger" @click="handelDelete(todo.id)">删除</button>
    <button class="btn btn-danger" >编辑</button>
  </li>
</template>

<script>
import PubSub from 'pubsub-js';
export default {
  name: 'MyItem',
  //声明接收todo对象
  props: ['todo'],
  methods: {
    //勾选或取消勾选
    handleCheck(id) {
      //通知app组件将对应todo对象的done值取反
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo',id)
    },
    handelDelete(id) {
      if (confirm('确认删除该条记录吗？')) {
        //通知app组件删除对应todo对象
        // this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo',id)
        PubSub.publish('deleteTodo',id)
      }
    }
  }

}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
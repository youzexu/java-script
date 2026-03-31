<template>
  <div class="Category">
    <h3>{{ title }}分类</h3>
    <slot >我是一些默认值</slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title']
}
</script>

<style>
.Category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: orange;
}
</style>
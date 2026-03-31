<template>
    <div class="demo">
        <h1>学生名称：{{ name }}</h1>
        <h1>学生性别：{{ sex }}</h1>
        <button @click="sendsdudentName">把学生名给App</button>

    </div>
</template>

<script>

export default {
    name: 'StudentInfo',
    data() {
        return {
            name: '张三',
            sex: '男'
        }
    },
    methods: {
        sendsdudentName(){
            this.$emit('atguigu',this.name)
        }
    },
    unbind(){
        this.$off('atguigu')//解绑一个自定义事件
    } 
}
</script>

<style lang="less">
.demo {
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
}
</style>
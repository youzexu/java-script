<template>
    <div class="demo">
        <h1>学生名称：{{ name }}</h1>
        <h1>学生性别：{{ sex }}</h1>
        <button @click="sendStudentName">把学生名给school组件</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'StudentInfo',
    data() {
        return {
            name: '张三',
            sex: '男'
        }
    },
    mounted() {
        // console.log('StudentInfo',this.x);
    },
    methods: {
        sendStudentName() {
         pubsub.publish('hello',666)
            // this.$bus.$emit('hello', this.name);
        }
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
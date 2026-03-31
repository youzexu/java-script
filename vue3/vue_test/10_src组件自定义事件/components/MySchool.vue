<template>
    <div class="demo">
        <h1>学校名称：{{ name }}</h1>
        <h1>学校地址：{{ address }}</h1>
        <button @click="sendschoolName">把学校名给App</button>

    </div>
</template>

<script>

export default {
    name: 'MySchool',
    props:['getschoolName'],
    data() {
        return {
            name: '尚硅谷',
            address: '北京'
        }
    },
    methods: {
        sendschoolName(){
            this.getschoolName(this.name);
        }
    }
}
</script>
<!-- 防止冲突 -->
<style scoped>
.demo{
    background-color: orange;
    padding: 5px;
}
</style>
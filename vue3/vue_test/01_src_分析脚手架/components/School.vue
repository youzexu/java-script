<template>
    <div class="demo">
        <h2>学校名称:{{ schoolName }}</h2>
        <h2>学校地址:{{ adress }}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
export default {
    name: 'MySchool',
    data() {
        return {
            schoolName: '北京大学',
            adress: '北京市海淀区西二旗'
        }
    },
    methods: {
        showName() {
            alert(this.schoolName)
        }
    }
}
</script>

<style>
.demo {
    background-color:orange;
}
</style>
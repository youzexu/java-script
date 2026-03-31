<template>
    <div class="demo">
        <h1>学生名称{{ name }}</h1>
        <h1 class="qwe">学生性别{{ sex }}</h1>

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
}
</script>

<style lang="less">
.demo{
    background-color: skyblue;
    .qwe{
        font-size: 40px;
    }
}
</style>
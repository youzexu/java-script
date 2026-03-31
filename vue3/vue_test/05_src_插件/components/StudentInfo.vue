<template>
    <div>
        <h1>学生名称{{ name }}</h1>
        <h1>学生性别{{ sex }}</h1>

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

<style></style>
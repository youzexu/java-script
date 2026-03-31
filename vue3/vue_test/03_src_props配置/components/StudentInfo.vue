<template>
    <div>
        <h1 @click="ShouName">学生名称{{ name }}</h1>
        <h1>学生性别{{ sex }}</h1>

    </div>
</template>

<script>
import { mixin } from '../mixin'

export default {
    name: 'StudentInfo',
    data() {
        return {
            name: '张三',
            sex: '男'
        }
    },
    mixins: [mixin]
}
</script>

<style></style>
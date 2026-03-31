<template>
    <div>
        <h1 @click="ShouName">学校名称{{ name }}</h1>
        <h1>学校地址{{ address }}</h1>

    </div>
</template>

<script>
import { mixin } from '../mixin'

export default {
    name: 'MySchool',
    data() {
        return {
            name: '北京大学',
            address: '北京市海淀区西二旗北路10号'
        }
    },
    mixins: [mixin]
}
</script>

<style></style>
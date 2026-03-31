<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name: 'About',
    beforeDestroy() {
        console.log('about即将被销毁了')
    },
    mounted(){
        console.log('about已经被挂载了')
    }
}
</script>

<style></style>
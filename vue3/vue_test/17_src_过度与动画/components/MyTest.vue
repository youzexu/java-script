<template>
    <div>
        <button @click="isShow = !isShow">显示,隐藏</button>
        <transition appear>
        <h1 v-show="isShow">这是测试组件</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'MyTest',
    data() {
        return {
            isShow: true,
        }
    }
}
</script>

<style scoped>
h1 {
    background-color: orange;
}
.v-enter-active{
    animation: atguigu 1s;
}
.v-leave-active{
    animation: atguigu 1s reverse;
}
@keyframes atguigu {
    from {
        transform: translatex(-100%);
    }

    to {
        transform: translatex(0%);
    }
}
</style>
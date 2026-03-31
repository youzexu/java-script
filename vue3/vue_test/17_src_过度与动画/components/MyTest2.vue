<template>
    <div>
        <button @click="isShow = !isShow">显示,隐藏</button>
        <transition-group appear>
            <h1 v-show="isShow" key='1'>这是测试组件</h1>
            <h1 v-show="isShow" key='2'>这是测试组件</h1>                                                                           
        </transition-group>
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
    transition: 0.5s linear;
}

/* 进入起点离开终点 */
.v-enter,
.v-leave-to {
    transform: translateX(-100%);
}

/* 进入终点离开起点 */
.v-enter-to,
.v-leave {
    transform: translateX(0);
}
</style>
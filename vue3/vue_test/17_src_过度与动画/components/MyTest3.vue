<template>
    <div>
        <button @click="isShow = !isShow">显示,隐藏</button>
        <transition-group 
        appear 
        name="animate__animated animate__bounce" 
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp">
            <h1 v-show="isShow" key='1'>这是测试组件</h1>
            <h1 v-show="isShow" key='2'>这是测试组件</h1>                                                                           
        </transition-group>
    </div>
</template>

<script>
import 'animate.css'
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

</style>
<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <MySchool :getschoolName="getschoolName" />
        <hr>
        <!-- 通过父组件给子组件绑定了一个自定义事件：子给父传递数据 -->
        <StudentInfo @atguigu.once="getStudentName" />
    </div>
</template>

<script>

import MySchool from './components/MySchool.vue'
import StudentInfo from './components/StudentInfo.vue'

export default {
    name: 'App',
    components: { StudentInfo, MySchool },
    data() {
        return {
            msg: '你好啊'
        }
    },
    methods: {
        getschoolName(name) {
            console.log('App收到了学校名', name)
        },
        getStudentName(name) {
            console.log('App收到了学生名', name)
        }
    },

}
</script>

<style>
.app {
    background-color: gray;
    padding: 5px;
}
</style>
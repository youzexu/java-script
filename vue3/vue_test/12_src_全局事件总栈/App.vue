<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <MySchool/>
        <StudentInfo/>``
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
    }
}
</script>

<style>
.app {
    background-color: gray;
    padding: 5px;
}
</style>
<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="shouDOM">点我输出DOM元素</button>
        <MySchool></MySchool>
    </div>
</template>

<script>

import MySchool from './components/MySchool';

export default {
    name: 'App',
    components: { MySchool },
    data() {
        return {
            msg: 'Hello Vue.js!'
        }
    },
    methods: {
        shouDOM(){
            console.log(this.$refs.title)
        }
    },
}
</script>

<style></style>
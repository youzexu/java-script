<template>
    <div>
        <MySchool/><hr>
        <StudentInfo/>
    </div>
</template>

<script>

import MySchool from './components/MySchool.vue'
import StudentInfo from './components/StudentInfo.vue'

export default {
    name: 'App',
    components: { StudentInfo, MySchool },

}
</script>

<style></style>
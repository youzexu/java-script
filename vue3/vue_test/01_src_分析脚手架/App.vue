<template>
    <div>
        <img src="./assets/logo.png" alt="logo">
        <StudentInfo />
        <MySchool />
    </div>
</template>

<script>
import MySchool from './components/School'
import StudentInfo from './components/Student'

export default {
    name: 'App',
    components: {
        StudentInfo,
        MySchool
    }
}
</script>

<style></style>
<template>
    <div>
        <Count/><hr>
        <Person/>
    </div>
</template>

<script>
import Person from './components/Person1.vue'
import Count from './components/Count.vue'
export default {
    components: { Count, Person },
    name: 'App',
    mounted(){

    }
}
</script>
<style>

</style>
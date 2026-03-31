<template>
    <div>
        <MyTest></MyTest>
        <MyTest2></MyTest2>
        <MyTest3></MyTest3>
    </div>

</template>

<script>

import MyTest from './components/MyTest.vue'
import MyTest3 from './components/MyTest3.vue'
import MyTest2 from './components/MyTest2.vue'
export default {
    name: 'App',
    components: {MyTest, MyTest2, MyTest3}
}
</script>

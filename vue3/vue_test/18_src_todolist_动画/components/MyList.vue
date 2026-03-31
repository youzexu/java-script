<template>
    <ul class="todo-main">
        <transition-group name="todo" appear>
            <MyItem v-for="todoObj in todos" 
            :key="todoObj.id" 
            :todo="todoObj" />
        </transition-group>
    </ul>
</template>

<script>
import MyItem from './MyItem.vue';
export default {
    name: 'MyList',
    components: { MyItem },
    props: ['todos']
}
</script>

<style>
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}

.todo-enter-active {
    animation: atguigu 1s;
}

.todo-leave-active {
    animation: atguigu 1s reverse;
}

@keyframes atguigu {
    from {
        transform: translatex(100%);
    }

    to {
        transform: translatex(0%);
    }
}
</style>
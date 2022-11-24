<template>
    <div class="task">
        <p>{{task.id}} | {{task.title}}</p>
        <span class="material-symbols-outlined" @click="taskStore.deleteTask(task.id)">delete</span>
        <span class="material-symbols-outlined" :class="{active: task.isFav}" @click="taskStore.toggleFav(task.id)">favorite</span>
    </div>
</template>

<script>
    import { useTaskStore } from '../stores/TaskStore';
    export default {
        props: ['task'],
        setup() {
            const taskStore = useTaskStore()
            return {taskStore}
        }
    }
</script>
<template>
  <div class="home">
    <h1>Homeview</h1>
     <!-- main -->
   <main>
    <h1>{{ taskStore.name }}</h1>
    <!-- add task -->
    <div class="add-task">
      <TaskForm />
    </div>
    <!-- nav filter -->
    <nav class="filter">
      <button @click="filter = 'all'" class="filter-buttons">
        All tasks {{ taskStore.totalCount }}
      </button>
      <button @click="filter = 'favs'" class="filter-buttons">
        Fav tasks {{ taskStore.favCount }}
      </button>
    </nav>
    <!-- all tasks -->
    <div class="task-list" v-if="filter === 'all'">
      <h2>All tasks</h2>
      <div v-for="task in taskStore.tasks">
        <!-- <p>{{task.id}} | {{task.title}} | {{task.isFav}}</p> -->
        <TaskDetails :task="task" />
      </div>
    </div>
    <!-- fav tasks -->
    <div class="task-list" v-if="filter === 'favs'">
      <h2>Fav tasks</h2>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
  </div>
</template>

<script>
import { ref } from "vue";
import { useTaskStore } from "@/stores/TaskStore.js";
import TaskForm from "@/components/TaskForm.vue";
import TaskDetails from "@/components/TaskDetails.vue";
export default {
  components: { TaskForm, TaskDetails },
  name: "HomeView",
  data() {
    return {
      users: [],
    };
  },
  setup() {
    const taskStore = useTaskStore();
    const filter = ref("all");
    return { taskStore, filter };
  },
};
</script>
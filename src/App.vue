<script setup>
import ToDoEmpty from './components/ToDoEmpty.vue';
import ToDoFormAdd from './components/ToDoFormAdd.vue';
import ToDoItems from './components/ToDoItems.vue';
import ToDoSpinner from './components/ToDoSpinner.vue';

import { onMounted } from 'vue'
import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()

// executa depois que o componente está no DOM / usado para resgatar dados com GET
onMounted(() => {
    todoStore.fetchTodos()  // busca os dados assim que o componente monta
})

</script>

<template>
    <!-- <pre>
        {{ todoStore.todos }}
    </pre>
   -->
    <!-- Content -->
    <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

            <ToDoSpinner v-if="todoStore.loading" ></ToDoSpinner>

            <ToDoFormAdd></ToDoFormAdd>

            <ToDoItems></ToDoItems>

            <ToDoEmpty v-if="!todoStore.todos.length && !todoStore.loading"></ToDoEmpty>
        </div>
    </div>
    <!--/ Content -->

</template>

<style scoped>

</style>

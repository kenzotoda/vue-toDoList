<script setup>
import ToDoItem from '@/components/ToDoItem.vue'
import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()
</script>

<template>
    <div class="space-y-2">
        <ToDoItem v-for="todo in todoStore.todos" :key="todo.id" />
    </div>
</template>

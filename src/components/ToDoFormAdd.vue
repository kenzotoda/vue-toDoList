<!-- <template>
    <form class="flex items-center px-4 bg-gray-900 h-15 rounded-sm border-l-2 border-green-400 mb-3">
        <input placeholder="Adicione um novo item ..." type="text" class="bg-gray-900 placeholder-gray-500 text-gray-500 font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3">
        <button class="text-green-400 text-xs font-semibold focus:outline-none" type="submit">
            ADICIONAR
        </button>
    </form>
</template> -->


<script setup>
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo' // caminho da sua store

// Instanciar a store
const todoStore = useTodoStore()

// Variável local para o campo de input
const newTodoTitle = ref('')

// Função que será chamada ao enviar o formulário
async function handleAddTodo() {
    if (!newTodoTitle.value.trim()) return // evita enviar vazio

    const newTodo = {
        title: newTodoTitle.value,
        completed: false
    }

    await todoStore.addTodo(newTodo) // usa a função POST da store
    newTodoTitle.value = '' // limpa o campo
}
</script>

<template>
    <!-- 
      Formulário de envio de tarefas:
      - @submit escuta o evento de envio do form
      - .prevent impede o comportamento padrão do navegador (reload da página)
      - Quando o usuário clica em "ADICIONAR", a função handleAddTodo é chamada sem recarregar a página
    -->
    <form 
        class="flex items-center px-4 bg-gray-900 h-15 rounded-sm border-l-2 border-green-400 mb-3"
        @submit.prevent="handleAddTodo"
    >
        <!-- 
          Input ligado à variável `newTodoTitle` via v-model:
          - O que o usuário digita é armazenado automaticamente em `newTodoTitle`
          - Quando o formulário é enviado, o valor dessa variável é usado na função handleAddTodo
        -->
        <input
            v-model="newTodoTitle"
            placeholder="Adicione um novo item ..."
            type="text"
            class="bg-gray-900 placeholder-gray-500 text-gray-500 font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3"
        >
        <button
            class="text-green-400 text-xs font-semibold focus:outline-none"
            type="submit"
        >
            ADICIONAR
        </button>
    </form>
</template>

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTodoStore = defineStore('todo', () => {
    // --- VARIÁVEIS REATIVAS (estados da store) ---
    const todos = ref([])
    const loading = ref(false)
    const error = ref(null)

    // =========================================================
    // 🟢 GET (Buscar dados da API)
    // =========================================================
    async function fetchTodos() {
        loading.value = true
        error.value = null
    try {
        const response = await axios.get('http://localhost:3000/todos')
        todos.value = response.data // substitui o array inteiro ✅
    } catch {
        error.value = 'Erro ao carregar dados'
    } finally {
        loading.value = false
    }
  }
  // =========================================================
  // 🔴 FIM DO GET
  // =========================================================


  // =========================================================
  // 🟡 POST (Cadastrar novo item)
  // =========================================================
  async function addTodo(newTodo) {
      try {
        const response = await axios.post('http://localhost:3000/todos', newTodo)
        todos.value.push(response.data) // adiciona o novo item na lista local
        } catch {
            error.value = 'Erro ao adicionar tarefa'
        }
  }
  // =========================================================
  // 🔴 FIM DO POST
  // =========================================================

  // =========================================================
  // 🟠 PATCH (Atualizar completed)
  // =========================================================
  async function toggleCompleted(id) {
      const todo = todos.value.find(t => t.id === id)
      if (!todo) return

      try {
          // alterna o valor local primeiro
          todo.completed = !todo.completed

          // atualiza no backend (json-server ou API real)
          await axios.patch(`http://localhost:3000/todos/${id}`, {
              completed: todo.completed
          })
      } catch {
          error.value = 'Erro ao atualizar tarefa'
      }
  }

  // --- COMPUTED (valores derivados) ---
  const totalTodos = computed(() => todos.value.length)
  const completedTodos = computed(() => todos.value.filter(t => t.completed))

  // =========================================================
  // 🔵 RETURN GLOBAL DA STORE
  // =========================================================
  // Tudo que for retornado aqui fica acessível em outros componentes
  return { 
    todos, 
    loading, 
    error, 
    totalTodos, 
    completedTodos, 
    fetchTodos,  // função GET
    addTodo,      // função POST
    toggleCompleted
  }
})

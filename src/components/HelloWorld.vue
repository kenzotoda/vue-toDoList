<script setup>

import { ref, reactive } from 'vue'

// Variável simples (ref)
const nome = ref('Kenzo')

// Objeto complexo (reactive)
const usuario = reactive({
  idade: 23,
  ativo: true
})

defineProps({
  msg: {
    type: String,
    required: true,
  },
})

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>

  <div>
    <h2>Exemplo com ref()</h2>
    <p>Nome: {{ nome }}</p>
    <p v-if=" nome === 'Kenzo' ">O nome {{ nome }} é válido</p>
    <p v-else>O nome {{ nome }} não é válido</p>

    <h2>Exemplo com reactive()</h2>
    <p>Idade: {{ usuario.idade }}</p>
    <p>Ativo: {{ usuario.ativo ? 'Sim' : 'Não' }}</p>
  </div>

</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

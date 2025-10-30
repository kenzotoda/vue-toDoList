<script setup>
import ToDoEmpty from './components/ToDoEmpty.vue';
import ToDoFormAdd from './components/ToDoFormAdd.vue';
import ToDoItems from './components/ToDoItems.vue';
import ToDoSpinner from './components/ToDoSpinner.vue';


</script>

<template>
  
    <!-- Content -->
    <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

            <ToDoSpinner></ToDoSpinner>

            <ToDoFormAdd></ToDoFormAdd>

            <ToDoItems></ToDoItems>

            <ToDoEmpty></ToDoEmpty>  
        </div>
    </div>
    <!--/ Content -->

</template>

<style scoped>

</style>

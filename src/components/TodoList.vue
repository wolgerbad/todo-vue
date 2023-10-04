<template>
    <div class="flex mx-auto mt-8 flex-col w-3/12 min-h-[30rem] bg-white shadow-lg p-6" >
    
    <div class="flex flex-col items-center w-full h-full  rounded relative">
        
        <h3 class="font-semibold text-xl">
            To-do List
        </h3>
   
        <p>What needs to be done?</p>
        <input v-model="item" type="text" class="bg-gray-200 border-2 w-full border-black" >
     
        
        <button @click="handleAdd" class="bg-black text-white w-full mt-2" >Add</button>
        <p class="mt-2">{{ todoStore.tasks.length }} items left to do</p>
        <button @click="filter = `favs`" class="absolute -right-4 -top-4 bg-orange-200 p-2 rounded">
            Fav Tasks
        </button>
        <button @click="filter = `all`"  class="absolute -left-4 -top-4 bg-orange-200 p-2 rounded">
            All Tasks
        </button>
    </div>
<transition-group mode="out-in" tag="ul" name="list">
    <TodoItem v-if="filter === `all`" v-for="todo in todoStore.tasks" :key="todo.id" :todo="todo" />
    <TodoItem v-if="filter === `favs`" v-for="todo in todoStore.favs" :key="todo.id" :todo="todo" />
</transition-group>
</div>
</template>

<script setup lang="ts">
import TodoItem from "./TodoItem.vue"
import { ref } from 'vue';
import {useTodoStore} from "../stores/TodoStore";
const todoStore = useTodoStore();

const item = ref("");
const filter = ref("all")

todoStore.getTasks()

function handleAdd() {
    if(item.value.length > 0 ) {
todoStore.addTask({
    id: Math.floor(Math.random() * 1000),
    title:item.value,
    isFav: false
})    
item.value = ""
    }
}

</script>

<style scoped>

</style>
<template>
    
     
     <li class="bg-gray-100 p-2 mb-3 flex justify-between items-center rounded shadow-lg">
        <p  >{{ todo.title }} </p>
        <div flex>
          <i @click="todoStore.toggleFav(todo)" class=" mr-2 fa-solid fa-heart cursor-pointer icon" :class="{ active: todo.isFav } "></i>
          <i @click="todoStore.handleDelete(todo.id)" class="fa-solid fa-trash cursor-pointer icon"></i>
        </div>
    </li>

    
</template>

<script setup lang="ts">
import { useTodoStore } from '../stores/TodoStore';
const todoStore = useTodoStore();

defineProps(["todo"])



</script>

<style scoped>
.icon {
    color:#8b8688;
}
.active {
    color: rgb(223, 46, 46);
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: scale(0.6);
}

.list-enter-active,
.list-leave-active {
    transition: all 0.4s ease;
}
</style>
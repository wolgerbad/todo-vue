import { defineStore } from "pinia";
import TaskInterface from "../interfaces/TaskInterface";

export const useTodoStore = defineStore("todo-store", {
    state: () => ({
        tasks: [{
            id:1,
            title:"Learn vue",
            isFav:false
        }],
        
    }),
    actions: {
        async addTask(task: TaskInterface) {
            this.tasks.push(task);
            const res = await fetch("http://localhost:3000/tasks", {
                method:"POST",
                body:JSON.stringify(task),
                headers: {"Content-type": "application/json"}
            
            })
            console.log(res)
        },
       toggleFav(task: TaskInterface) {
            task.isFav = !task.isFav
           
        },
        async handleDelete(id: number) {
            this.tasks = this.tasks.filter(task=> task.id !== id);
            const res = await fetch("http://localhost:3000/tasks/" + id, {
                method: "DELETE",
            });
            console.log(res);
            console.log("delete")
        },
        async getTasks() {
            
            const res = await fetch("http://localhost:3000/tasks");
            const data = await res.json();
           
            this.tasks = data
        }
        
    },
    getters: {
        favs: (state) => state.tasks.filter(task => task.isFav === true),
        
    }
})
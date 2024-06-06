import axios from "axios"
import { defineStore } from "pinia"


export const usePostStore = defineStore('taskStore', {
    state:() => ({ 
        posts: [],
        loading: false  
    }),
    getters: {

        Posts() {        
        }
    },
    actions: {
        async getPosts() {
            this.loading = true
            axios.get('http://127.0.0.1:8000/api/post/getAllPosts').then((res) => {
                this.posts = res
                this.loading = false
            })
        },

        async addPost() {
            axios.post('http://127.0.0.1:8000/api/post/newPost').then((res) => {
                
            })

        }
    }
})
<script>
import axios from "axios";

export default {
  data() {
    return {
      title: '',
      description: '',
      picture: '',
      posts: [],
    };
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/post/getAllPosts')
     .then((res) => {
        this.posts = res.data.posts;
        console.log(this.posts);
      });
  },
  methods: {
    handlePostSubmit() {
      const postCredentials = {
        title: this.title,
        description: this.description,
        picture: this.picture
      };
      console.log(postCredentials);
      // axios.post('http://127.0.0.1:8000/api/post/newPost', postCredentials)
      //  .then((res) => {
      //     console.log(res);
      //   });
    }
  }
};
</script>


<template>
  <main>
  <header>
    
  </header>
  <body>
    <div>
      Homepage
    </div>
    <div v-for="post in this.posts" :key="post.id">
      <div class="post" >
        <p>{{ post.title }} </p>
        <p>{{ post.description }} </p>
        <p>{{ post.date }} </p>
        <p>{{ post.picture }} </p>
      </div>
    </div>

    <form class="form" @submit.prevent>
      <label for="title">Post title :</label>
      <input type="text" name="title" required v-model="title">

      <label for="description" >Post description :</label>
      <input type="text" name="description" required v-model="description">
      
      <label for="picture">Post picture (link) :</label>
      <input type="text" name="picture" required v-model="picture">

      <!-- <label for="date">{{ moment("D/M/YYYY") }}</label> -->
      <!-- <input type="hidden" value={{ date }} name="date" id=""> -->
      <button type="submit">Create my post</button>
    </form>

  </body>

 
  </main>
</template>

<style>

.post {
  display: flex;
  flex-direction: column;
  font-size: 18px;
  background-color: wheat;
  margin: 5px;
  padding: 5px;
}

form {
  display: flex;
  flex-direction: column;
}

</style>
<script setup>
import router from '@/router';
import axios from 'axios';
import { ref } from 'vue';

let email = ref('')
let password = ref('')
let showPassword = ref("password");
let user = ref('')

function handleLogin() {

    const loginCredentials = {
    email : email.value,
    password : password.value
  }
  axios.post('http://127.0.0.1:8000/api/login', loginCredentials).then((res) => {
    console.log(loginCredentials)
    console.log(res.data.user)
    user = res.data.user
    if (res.data.user !== null){

      localStorage.setItem('user', JSON.stringify(user));
      router.push('/')

    }

  })
}

function showHidePassword() {
  if (showPassword.value == "password") {
    showPassword.value = "text"
  } else {
    showPassword.value = "password"
  }
}

</script>

<template>
    <div>
        <div class="alert alert-info">
            email: {{ email }}<br />
            Password: {{ password }}
        </div>
        <h2>Login</h2>
        <Form @submit.prevent="handleLogin" :validation-schema="schema">
            <label for="email">Email</label>
            <input type="text" name="email" required v-model="email">
            <label for="password">Password</label>
            <input :type="showPassword" name="password" required v-model="password">
            <button type="submit">Login</button>
        </Form>
            <button id="showPassword" @click="showHidePassword">Show/Hide password</button>
    </div>
</template>


<style>

#showPassword:hover {

  cursor: pointer

}

</style>
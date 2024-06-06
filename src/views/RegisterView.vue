<script setup>
import router from "@/router";
import axios from "axios";
import { ref } from "vue";


let firstname = ref('')
let lastname = ref('')
let email = ref('')
let password = ref('')
let passwordVerify = ref('')
let phone = ref('')

let showPassword = ref("password");
let showPassword2 = ref("password");



    function handleRegister() {
        
      const registerCredentials = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
      };

      axios.post('http://127.0.0.1:8000/api/register', registerCredentials)
       .then((res) => {
          console.log(res);
          if (res.status == 200) {
            router.push('/login')
          }
        });
    }
    
    function  showHidePassword() {
        if (showPassword.value == "password") {
            showPassword.value = "text"
        } else {
            showPassword.value = "password"
        }
    }

    function  showHidePassword2() {
        if (showPassword2.value == "password") {
            showPassword2.value = "text"
        } else {
            showPassword2.value = "password"
        }
    }
  
</script>


<template>
  <main>
  <header>
    
  </header>
  <body>

    <form class="form" @submit.prevent="handleRegister">
      <label for="firstname">Firstname :</label>
      <input type="text" name="firstname" required v-model="firstname" placeholder="John">

      <label for="Lastname" >Lastname :</label>
      <input type="text" name="Lastname" required v-model="lastname" placeholder="Doe">

      <label for="Email" >Email :</label>
      <input type="text" name="Email" required v-model="email" placeholder="John.Doe@gmail.com">
      
      <label for="Phone">Phone :</label>
      <input type="tel" name="Phone" required v-model="phone" placeholder="XXXXXXXXXX">

      <label for="Password" >Password :</label>
      <input :type="showPassword" name="Password" required v-model="password">
      <p id="showPassword" @click="showHidePassword">Show/Hide password</p>
    
      <label for="Password" >Verify Password :</label>
      <input :type="showPassword2" name="Password" required v-model="passwordVerify">
      <p id="showPassword" @click="showHidePassword2">Show/Hide password</p>

      <br>
      <button type="submit">Create my account</button>
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
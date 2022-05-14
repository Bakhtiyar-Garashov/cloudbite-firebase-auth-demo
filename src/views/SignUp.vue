<template>
  <div class="register-page">
    <h1>Create a user here</h1>
    <FormKit label="Your email" type="email" help="Pick an email" v-model="email" validation="required|email" />

    <FormKit label="Your password" type="password" help="Pick a password. Min length is 8" v-model="password"
      validation="required|length:8" />

    <FormKit label="Your name" type="text" help="Pick a name. Min length is 5" v-model="name"
      validation="required|length:5" />
    <button @click="register">Sign up</button>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
const email = ref('');
const password = ref('');
const name = ref('');
const router = useRouter();

const auth = getAuth();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value).then((data) => {
    alert("User has been created successful");    
    updateProfile(auth.currentUser, {
      displayName: name.value
    });
    router.push('/');
  }).catch((error) => {
    alert("Failed to create a new user. See error on browser console");
    console.log(error);
  })

}

</script>
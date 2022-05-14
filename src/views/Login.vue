<template>
  <div class="register-page">
    <h1>Sign in</h1>
    <FormKit label="Your email" type="email" v-model="email" validation="required|email" />

    <FormKit label="Your password" type="password" v-model="password" validation="required|length:8" />
    <button @click="register">Sign in</button>
    or via Google
    <button @click="signInWithGoogle">Sign in via Google</button>

  </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from 'firebase/auth';
const email = ref('');
const password = ref('');
const router = useRouter();
const auth = getAuth();

const register = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value).then((data) => {
    alert("User has been logged in successfully");
    console.log(auth.currentUser)
    router.push('/');
  }).catch((error) => {
    alert("Failed to log in. See error on browser console");
    console.log(error);
  })

}

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
  .then((result)=>{
    alert("Signed in successfully via Google")
    router.push('/')
    console.log(result)
  }).catch((error)=>{
    alert("Failed to create Oauth user. Check browser console for log")
    console.log(error)
  })
}


</script>
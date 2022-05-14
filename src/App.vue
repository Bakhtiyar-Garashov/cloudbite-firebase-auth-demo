<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink class="router-link" to="/">Home</RouterLink>
        <RouterLink class="router-link" to="/login">Login</RouterLink>
        <RouterLink class="router-link" to="/register">Sign up</RouterLink>

      </nav>
  </header>

  <RouterView />
</template>

<style>
header{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.router-link {
  margin: 30px;
  padding: 0 10px;
  border-right: .3px solid black;
}

.formkit-message{
  list-style: none;
  padding: 10px 20px;
  background-color: red;
  color: white;
}

.register-page,
.login-page,
.main-page {
  margin: 0 auto;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

button {
  width: 150px;
  margin-left: 30px;
  background-color: blue;
  border: 1px solid white;
  padding: 3px 9px;
  color: white;
  border-radius: 10%;
  cursor: pointer;
}

.formkit-outer {
  margin: 30px;
}
</style>
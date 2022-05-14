<script setup>
import { getAuth } from '@firebase/auth';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

let displayName = ref('')
let ppUrl = ref('')

const auth = getAuth();
const user = auth.currentUser;

if (user !== null) {
  user.providerData.forEach((profile) => {
    displayName.value = profile.displayName
    ppUrl.value = profile.photoURL
  });
}

</script>

<template>
  <main>
    <h1>
      Welcome {{ displayName }}
    </h1>

    <img :src="ppUrl"/>
  </main>
</template>

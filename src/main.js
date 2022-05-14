import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'
import { initializeApp } from "firebase/app";
import firebaseConfig from '@/firebaseInit.js'
const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig);

initializeApp(firebaseConfig);

app.mount('#app')

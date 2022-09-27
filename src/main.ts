import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'virtual:svg-icons-register'
import '@/assets/styles/index.scss'
import vue3GoogleLogin from 'vue3-google-login'

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.use(pinia)
app.use(vue3GoogleLogin, {
  clientId: '1070347118763-hrg2hkeatdovn1bqv3h1relti0anijr1.apps.googleusercontent.com'
})

app.mount('#app')

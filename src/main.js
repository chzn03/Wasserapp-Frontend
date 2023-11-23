import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { oktaAuth } from '@/okta/config'
import oktaVue from "@okta/okta-vue";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

createApp(App)
    .use(router)
    .use(oktaVue, {
        oktaAuth,
        onAuthRequired: () => {
            router.push('/login')
        },
        onAuthResume: () => {
            router.push('/login')
        }
    })
    .mount('#app')

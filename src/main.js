import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OktaAuth } from './@okta/okta-auth-js'
import OktaVue from "@okta/okta-vue";
import oktaVue from "@okta/okta-vue/src/okta-vue";

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

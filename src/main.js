import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import OktaVue from '@okta/okta-vue'
//import OktaSignIn from "@okta/okta-signin-widget";
//import { OktaAuth } from "@okta/okta-auth-js";

/*
const oktaSignIn = new OktaSignIn({
    baseUrl: 'https://dev-70416438.okta.com',
    clientId: '0oad23790v7D3FmFb5d7',
    redirectUri: window.location.origin + '/login/callback',
    authParams: {
        pkce: true,
        issuer: 'https://dev-70416438.okta.com/oauth2/default',
        display: 'page',
        scopes: ['openid', 'profile', 'email']
    },
    features: { registration: true },
    useInteractionCodeFlow: false,
    useClassicEngine: true,
});

const oktaAuth = new OktaAuth({
    issuer: 'https://dev-70416438.okta/oauth2/default',
    clientId: '0oad23790v7D3FmFb5d7',
    redirectUri: window.location.origin + '/login/callback',
    scopes: ['openid', 'profile', 'email']
});
*/

// Vue-App erstellen und konfigurieren
const app = createApp(App);
app.use(router);
/*
app.use(OktaVue, {
    oktaAuth,
    onAuthRequired: () => {
        router.push('/login');
    },
    onAuthResume: () => {
        router.push('/login');
    }
});
*/

// App mounten
app.mount('#app');

// OktaAuth- und OktaSignIn-Instanzen exportieren
//export {oktaAuth, oktaSignIn};
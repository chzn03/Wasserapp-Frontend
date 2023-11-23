export default {
    oidc: {
        clientId: '0oad23790v7D3FmFb5d7',
        issuer: 'https://dev-70416438.okta.com/oauth2/default',
        redirectUri: window.location.origin + '/login/callback',
        scopes: ['openid', 'profile', 'email'],
        pkce: true,
    }
}

import OktaSignIn from '@okta/okta-signin-widget'
import { OktaAuth } from '@okta/okta-auth-js'

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
    features: { registration: true }
})

const oktaAuth = new OktaAuth({
    issuer: 'https://dev-70416438.okta.com/oauth2/default',
    clientId: '0oad23790v7D3FmFb5d7',
    redirectUri: window.location.origin + '/login/callback',
    scopes: ['openid', 'profile', 'email']
})

export { oktaAuth, oktaSignIn }

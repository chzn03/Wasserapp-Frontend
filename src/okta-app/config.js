export default {
    oidc: {
        clientId: '0oad23790v7D3FmFb5d7',
        issuer: 'https://dev-70416438.okta.com/oauth2/default',
        redirectUri: window.location.origin + '/login/callback',
        scopes: ['openid', 'profile', 'email'],
        pkce: true,
    }
}

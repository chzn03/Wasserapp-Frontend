<template>
  <div id="profile">
    <h1>My User Profile (ID Token Claims)</h1>
    <p>
      Below is the information from your ID token.
    </p>
    <table>
      <thead>
      <tr>
        <th>Claim</th>
        <th>Value</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(claim, index) in claims" :key="index">
        <td>{{claim.claim}}</td>
        <td :id="'claim-' + claim.claim">{{claim.value}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//import { useAuth } from '@okta/okta-vue'

//const $auth = useAuth()
export default {
  name: 'ProfileView',
  data () {
    return {
      claims: []
    }
  },
  /*
  async created () {
    this.claims = Object.entries(await $auth.getUser()).map(entry => ({claim: entry[0], value: entry[1]}))
  }
  */
}
</script>
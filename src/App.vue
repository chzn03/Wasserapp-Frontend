<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
<!--
    <router-link to="/login" v-if="!authenticated">
      Login
    </router-link> |
    <router-link to="/profile" v-if="authenticated" >
      Profile
    </router-link> |
    <a v-if="authenticated" v-on:click="logout()">
      Logout
    </a>
    -->
  </div>
  <router-view/>
</template>

<script>
import { RouterLink, RouterView, useRoute } from 'vue-router'
//import { watch, onMounted, ref } from 'vue'
//import { useAuth } from '@okta/okta-vue'

//const $auth = useAuth()
//const $route = useRoute()
//const authenticated = ref(false)
export default {
  name: 'app',
}
/*
async function logout() {
  await $auth.signOut()
}
async function isAuthenticated () {
  authenticated.value = await $auth.isAuthenticated()
}
watch(() => $route.path, async () => {
  await isAuthenticated()
})
onMounted(async () => {
  await isAuthenticated()
  $auth.authStateManager.subscribe(isAuthenticated)
})
*/
</script>

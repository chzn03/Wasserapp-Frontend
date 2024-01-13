<template>
  <div class="login">
    <div id="okta-sign-in-container"></div>
  </div>
</template>

<script>
//import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'

//import { oktaSignIn } from '@/main'
//import { onMounted, onUnmounted, nextTick } from 'vue'

export default {
  name: 'LoginView'
}
/*
onMounted(() => {
  nextTick(() => {
    oktaSignIn.showSignInAndRedirect(
        { el: '#okta-signin-container' },
    )
  })
})
onUnmounted(() => {
  oktaSignIn.remove()
})
*/
</script>

<style scoped>

</style>
<template>
  <div class="login">
    <div id="okta-sign-in-container"></div>
  </div>
</template>

<script>
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
import OktaSignIn from '@okta/okta-signin-widget'

export default {
  name: 'Login',
  mounted: function () {
    this.$nextTick(function () {
      oktaSignIn.showSignInAndRedirect(
          { el: '#okta-signin-container' }
      )
    })
  },
  unmounted () {
    // Remove the widget from the DOM on path change
    oktaSignIn.remove()
  }
}
</script>

<style scoped>

</style>
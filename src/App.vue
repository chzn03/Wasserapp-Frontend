<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login" v-if="!authenticated">
      Login
    </router-link> |
    <router-link to="/profile" v-if="authenticated" >
      Profile
    </router-link> |
    <a v-if="authenticated" v-on:click="logout()">
      Logout
    </a>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return { authenticated: false }
  },
  async created() {
    await this.isAuthenticated()
    this.$auth.authStateManager.subscribe(this.isAuthenticated)
  },
  watch: {
    $route: 'isAuthenticated'
  },
  methods : {
    async isAuthenticated(){
      this.authenticated = await this.$auth.isAuthenticated()
    },
    async logout() {
      await this.$auth.signOut()
    }
  }
}
</script>

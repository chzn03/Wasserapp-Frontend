<template>
  <div id="home" class="home">
    <!--
    <div v-if="!this.$root.authenticated">
      <p></p>
      <router-link role="button" to="/login">

      </router-link>
    </div>

    <div v-if="this.$root.authenticated">
      <p>Welcome back, {{claims.name}}!</p>
      <p>
        You have successfully authenticated with Okta!
        Visit the <a href="/profile">My Profile</a> page to take a look inside the ID token.
      </p>
    </div>
    -->
    <BackendSchnittstelleTemp></BackendSchnittstelleTemp>
  </div>
</template>

<script>
import BackendSchnittstelleTemp from "@/components/BackendSchnittstelleTemp.vue";

export default {
  name: 'HomeView',
  components: {
    BackendSchnittstelleTemp
  },
  /*
  data: function () {
    return {
      claims: ''
    }
  },
  created () { this.setup() },
  methods: {
    async setup () {
      if (this.$root.authenticated) { this.claims = await this.$auth.getUser() }
    }
  }
   */
}
</script>

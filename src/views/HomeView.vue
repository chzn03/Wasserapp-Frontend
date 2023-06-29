<template>
  <div class="home">
    title
    <backend-schnittstelle-temp title="lets talk to the Back"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BackendSchnittstelleTemp from '@/components/BackendSchnittstellTemp.vue'

export default {
  name: 'HomeView',
  components: {
    BackendSchnittstelleTemp
  }
}
</script>

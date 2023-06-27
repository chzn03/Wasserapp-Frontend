<template>
  <div class="home">
    <backend-schnittstelle-temp title="lets talk to the Backend"/>
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

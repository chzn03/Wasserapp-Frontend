<template>
  <h3> {{title}}</h3>
  <div>
    <input v-model="nameField" placeholder="Name" type="text" ref="nameInput">
    <input v-model="amountField" placeholder="Amount" @keyup.enter="save()">
    <button type="button" @click="save()">Save</button>
    <input v-model="filterCrit" placeholder="filter criterion">

  </div>
  <div>
    <table class="User">
      <thead>
      <tr>
        <th>Name</th>
        <th>Amount</th>
      </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  name: "BackendSchnittstelleTemp",
  props: ['title'],
  data() {
    return {
      nameField: '',
      amountField: '',
      claims: '',
      accessToken: '',
      filterCrit: '',
      items:[]
    }
  },
  methods: {
    myFilterFunc (crit) {
      return this.items.filter(
          it => crit.length < 1 ||
              it.name.toLowerCase().includes(crit.toLowerCase()))
    },
    loadWasser() {
      const endpoint = 'http://localhost:8080/users'
      const reqOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, reqOptions)
          .then(response => response.json)
          .then(result => result.forEach(wasser => {
            this.items.push(wasser)
          }))
          .catch(error => console.log('error', error))
    },
    save() {
      const endpoint = 'http://localhost:8080/User'
      const data = {
        name: this.nameField,
        amount: this.amountField
      }
      const reqOptions = {
        method: 'POST',
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch(endpoint, reqOptions)
          .then(response => response.json)
          .then(data => {
            console.log('Success', data)
          })
          .catch(error => console.log('error', error))
    },
    async setup () {
      if (this.$root.authenticated) {
        this.claims = await this.$auth.getUser()
        // this.accessToken = await this.$auth.getAccessToken()
      }
    }
  },
  async created () {
    await this.setup()
    this.loadWasser()
  },
    mounted() {
    },
    updated() {
      console.log("UPDATED!")
    }
}
</script>

<style scoped>
table {
  margin-left: auto;
  margin-right: auto;
}

button{
  color : blue;
}
</style>
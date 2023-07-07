<template>
  <h3> {{title}}</h3>
  <div>
    <input v-model="nameField" placeholder="Name" type="text" ref="nameInput">
    <input v-model="amountField" placeholder="Amount" @keyup.enter="save()">
    <button type="button" @click="save()">Save</button>
  </div>
  <div>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Amount</th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="items.length === 0">
        <td colspan="2">No Users yet</td>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td>{{item.name}}</td>
        <td>{{item.amount}}</td>
      </tr>
      <tr>
        <td>{{ nameField }}</td>
        <td>{{ amountField }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "BackendSchnittstelleTemp",
  props: ['title'],
  data() {
    return {
      items: [],
      nameField: '',
      amountField: ''
    }
  },
  methods: {
    loadWasser() {
      const endpoint = 'http://localhost:8080/users'
      const reqOptions = {
        method: 'GET',
        redirect: 'follow',
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
    }
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

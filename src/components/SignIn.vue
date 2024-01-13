
<template>
 <body>
 <div class ="container">
   <b id="Willkommenstext">Willkommen! Bitte gib deinen Namen und deine E-mail ein</b>
  <input placeholder="Name" type="text" id="name">
  <input placeholder="E-Mail" type="text" id="mail">
  <button type="button" @click="save()">Sign In/ Sign Up</button>
 </div>
 </body>
</template>

<script>
let userName;
let userMail;
export default {
  methods: {
    save() {
      userName = document.getElementById("name").value
      userMail = document.getElementById("mail").value
      if (!userName || !userMail) {
        alert('Please fill in both fields.');
        return;
      }
      document.getElementById("Willkommenstext").innerText = `Willkommen ${userName}!`;
      localStorage.setItem('name', userName);
      localStorage.setItem('mail', userMail);
      const endpoint = 'http://localhost:8080/User'
      const data = {
        name: userName,
        mail: userMail,
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
    mounted() {
    }
  }
};


</script>

<style scoped>
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  background-color: rgba(0, 0, 0, 0); /* Hintergrundfarbe der Seite */
}

.container {
  background-color: #d0d0d0; /* Hintergrundfarbe der grauen Zelle */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #3498db; /* Hintergrundfarbe des Buttons */
  color: #fff; /* Textfarbe des Buttons */
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>

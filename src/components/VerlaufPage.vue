<template>
  <body>
  <div class ="container">
    <b id="Willkommenstext">Willkommen! Hier findest du deinen Wasserverbrauch</b>
    <table id="Wasserstand">
      <thead>
      <tr>
        <th>Owner</th>
        <th>Tagesziel</th>
        <th>Menge</th>
        <th></th>
      </tr>
      </thead>
      <tbody id="datalist">

      </tbody>
    </table>
  </div>
  </body>
</template>

<script>
let mail;
export default {
  name: "VerlaufPage",
  items: []
}
function load(){
  mail = localStorage.getItem('mail')
  const endpoint = 'http://localhost:8080/users' + '?mail=' + mail
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }
  fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => {
        displayData(result)
      })
      .catch(error => console.log('error', error))
}
function displayData(data){
  const datalist = document.getElementById("datalist")

  data.forEach(item => {
    const row = datalist.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    cell1.textContent = item.owner;
    cell2.textContent = item.tagesziel;
    cell3.textContent = item.getrunken;
  })
}
window.onclick = function () {
  load();
}

</script>

<style scoped>

</style>
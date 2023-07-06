<template>
  <section id= "background">
    <div class = "wave wave1"></div>
    <div class = "wave wave2"></div>
    <div class = "wave wave3"></div>
  </section>

  <div id="app">
    <h1>{{ greeting }}</h1>

    <header id = "Navigationbar">
      <h1>Drinking Water is fun!</h1>
      <nav>
        <div id = "Reminder">Du hast noch genug Zeit um dein Ziel heute zu erreichen</div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Verlauf</a></li>
        </ul>
      </nav>
    </header>

    <section id="intro">
      <h2>Willkommen bei Drinking Water is fun!</h2>
      <p>Mit dieser App kannst du deinen Wasserverbrauch verfolgen. Starte jetzt!!</p>
    </section>



    <main>
      <h1 id ="Tabelleüberschrift">Wasserstand</h1>
      <table id = "Wasserstand">
        <thead>
        <tr>
          <th>Tag, Zeit</th>
          <th>Menge</th>

        </tr>
        </thead>
        <tbody>
        <tr id="row1">
          <td>Row1 cell1</td>
          <td>Row1 cell2</td>
          <td><button type="button" @click="deleteRow('row1')">Delete</button></td>
        </tr>
        <tr id="row2">
          <td>Row2 cell1</td>
          <td>Row2 cell2</td>
          <td><button type="button" @click="deleteRow('row2')">Delete</button></td>
        </tr>
        <tr id="row3">
          <td>{{ "4.07.23, 12 uhr" }}</td>
          <td>{{"0.2 ml"}}</td>
        <td><button type="button" @click="deleteRow('row3')">Delete</button></td>
        </tr>
        </tbody>
      </table>

      <button type="button" @click="addRow()">Add</button>

    </main>

    <section id="Verlauf">
      <h2>Verlauf</h2>
      <p>Hier kannst du deine aktuellen Wasserverbrauchsdaten einsehen und vergleichen.</p>
      <p>Dein tägliches Ziel: 2 Liter</p>
      <p id="water-consumption">Wasserverbrauch: <span id="consumption-value">0</span> Liter</p>
    </section>

    <footer>
      <p>&copy; 2023 Wasser-App. Alle Rechte vorbehalten.</p>
    </footer>
  </div>
</template>

<script>

export default {


  data() {
    return {
      greeting: '',
      daytime: ''
    };
  },
  methods: {



setCurrentTime()
{
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMin = currentDate.getMinutes();

  if (currentHour >= 5 && currentHour < 12) {
    this.daytime = 'Guten Morgen';
  } else if (currentHour >= 12 && currentHour < 18) {
    this.daytime = 'Mittag';
  } else {
    this.daytime = 'Gute Abend';
  }

  const formattedHour = ('0' + currentHour).slice(-2);
  const formattedMinute = ('0' + currentMin).slice(-2);

  this.greeting = `${this.daytime}! Es ist ${formattedHour}:${formattedMinute}`;
},

addRow() {
  const table = document.getElementById("Wasserstand");
  const row = table.insertRow(-1); // Insert row at the end of the table
  const cell1 = row.insertCell(0); // Insert cells for the row
  const cell2 = row.insertCell(1);

  cell1.innerHTML = "New Cell 1"; // Set content for the cells
  cell2.innerHTML = "New Cell 2";
}
,
    deleteRow(rowId) {
       const row = document.getElementById(rowId);
      row.remove();

      }

    }
    ,
invtervall()
{
  const targetHour = 17;

  const interval = setInterval(function () {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    while (currentHour >= targetHour) {
      clearInterval(interval);
      changeHTML();
    }
  }, 1000)

  function changeHTML() {
    const reminder = document.getElementById("Reminder");
    reminder.innerHTML = "Du hast kaum noch Zeit dein tägliches Ziel zu erreichen !!";
    const farbeÄndern = document.getElementById("Farbe");
    farbeÄndern.style.background = "red";
  }
}
,

mounted()
{
  this.setCurrentTime()
  this.invtervall()

}



};
</script>

<style scoped>
* {
  padding: 1px;
  margin: 1px;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

body{
  font-family: Montserrat;
  background-color: black;

}

nav {
  background: cornflowerblue;
  height: 80px;
  width: 100%;
}

label {
  color: white;
  font-size: 35px;
  line-height: 80px;
  padding: 0 100px;
  font-weight: bold;
}

#Reminder{
  color : #dddddd;
  font-size : 20px;
}

nav ul {
  float: left;
  margin-right: 20px;
}

nav ul li {
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
}

nav ul li a {
  color: white;
  font-size: 17px;
  text-transform: uppercase;
}
header {
  color: #dddddd;
  padding: 20px;
  text-align: left;
}
#intro{
  color: #dddddd;
  font-size: 20px;
  font-style: italic ;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
}

#Verlauf{
  color: #dddddd;
margin: 20px;
}
#Verlauf h2 {
font-style: inherit;

}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px;
  text-align: left;
}

table th, table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

table th {
  background-color: cornflowerblue;
}

table tr:nth-child(even) {
  background-color: #f9f9f9;
}

table tr:hover {
  background-color: #f5f5f5;
}

.content-table tbody tr{
border-bottom: 1px solid steelblue;
}

button{
  text-align: center;
  float: right;
  display: inline-block;
  padding: 10px 20px;
  background-color: white;
  color: cornflowerblue;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#background{
  position: absolute;
  width: 100%;
  height: 100vh;
  background: #3586ff;
  overflow: hidden;
  z-index: -1;
}
section.wave{
position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url(../../../Downloads/wave.png);
background-size: 1000px 100px;
z-index: 1;
}
section .wave.wave1{
  animation: animate 30s linear infinite;
}
</style>

<template>
  <section id= "background">
    <div class = "wave wave1"></div>
    <div class = "wave wave2"></div>
    <div class = "wave wave3"></div>
  </section>

  <div id="app">
    <h1 id= "greeting">{{ greeting }}</h1>

    <header id = "Navigationbar">
      <h1 id="namehead">Drinking Water is fun!</h1>
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
     Wie viel Wasser hast du getrunken ? (in Liter) <input type="number" name="amount" id="amount"/> <br><br/>
      <button id="adding" type="button" @click="addRow()">Add</button> <br><br/>
      <table  id = "Wasserstand" border="1">
        <thead>
        <tr>
          <th>Tag, Zeit</th>
          <th>Menge</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr id="row1" class="rowDesign">
          <td>{{ "3.07.23, 13 uhr" }}</td>
          <td>{{"0.2 ml"}}</td>
          <td><button class="deletion" type="button" @click="deleteRow('row1')">Delete</button></td>
        </tr>
        <tr id="row2" class="rowDesign">
          <td>Row2 cell1</td>
          <td>Row2 cell2</td>
          <td><button class="deletion" type="button" @click="deleteRow('row2')">Delete</button></td>
        </tr>
        <tr id="row3" class="rowDesign">
          <td>{{ "4.07.23, 12 uhr" }}</td>
          <td>{{"0.2 ml"}}</td>
        <td><button class="deletion" type="button" @click="deleteRow('row3')">Delete</button></td>
        </tr>

        </tbody>
      </table>



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
    this.daytime = 'Morgen';
  } else if (currentHour >= 12 && currentHour < 18) {
    this.daytime = 'Mittag';
  } else {
    this.daytime = 'Abend';
  }

  const formattedHour = ('0' + currentHour).slice(-2);
  const formattedMinute = ('0' + currentMin).slice(-2);

  this.greeting = `${this.daytime}! Es ist ${formattedHour}:${formattedMinute}`;
},
    deleteRow(rowId) {
      const row = document.getElementById(rowId);
      row.remove();

    },

addRow() {
  var amount = document.getElementById('amount').value;
  var liters = parseFloat(amount) ;


  const table = document.getElementById("Wasserstand");
  const row = table.insertRow(-1);

  const rowId = 'row' + (this.rowCounter + 1)
  row.setAttribute('id',rowId);

  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);

  const deleteButton = document.createElement('button'); // Create a new button element
  deleteButton.innerText = 'Delete';
  deleteButton.classList.add('deletion');

  cell1.innerHTML = this.daytime;
  cell2.innerHTML = liters.toFixed(1) +  "L";
  cell3.appendChild(deleteButton)

  deleteButton.addEventListener('click', () => {
    this.deleteRow(rowId);
  });
  this.rowCounter++; // Increment the row counter

  row.classList.add('rowDesign');

},


    },
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

<style >
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
#greeting{
  color : white;
}
#namehead{
  color: #3586ff;
}

nav {
  background: cornflowerblue;
  height: 80px;
  width: 100%;
  margin: 5px;
}

label {
  color: white;
  font-size: 35px;
  line-height: 80px;
  padding: 0 100px;
  font-weight: bold;
  margin: 5px;
}

#Reminder{
  color : white;
  font-size : 20px;
}

nav ul {
  float: left;
}

nav ul li {
  display: inline-block;
  line-height: 80px;
}

nav ul li a {
  color: white;
  font-size: 17px;
  text-transform: uppercase;
}
header {
  background-color: white;
  text-align: center;
  padding: 20px;
  margin: 50px;
}
#intro{
  color: #dddddd;
  font-size: 20px;
  font-style: italic ;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;

}

#Verlauf{
  color: #dddddd;
margin: 20px;
}
#Verlauf h2 {
font-style: inherit;

}

#Tabelleüberschrift{
  color: white;

}
table {
  padding-top: -10px;
  width: 100%;
  border-collapse: collapse;
  margin: 5px;
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

 .rowDesign{
  background-color: whitesmoke;
   font-size: larger;
}


#adding{
  text-align: center;
  float: left;
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
.deletion{
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

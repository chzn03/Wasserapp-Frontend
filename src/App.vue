<template>
  <div id="app">
    <h1>{{ greeting }}</h1>

    <header>
      <h1>Drinking Water is fun!</h1>
      <nav id = "Farbe">
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
        <tr>
          <td>{{ "4.07.23, 11 uhr" }}</td>
          <td>{{"0.2 ml"}}</td>
        </tr>
        <tr>
          <td>{{ "4.07.23, 12 uhr" }}</td>
          <td>{{"0.2 ml"}}</td></tr>
        </tbody>
      </table>
      <button type="button" onclick="addRow()">Add</button>
      <button type="button" onclick="deleteRow(this)">Delete</button>
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
    setCurrentTime() {
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
    invtervall(){
      const targetHour = 17;

      const interval = setInterval(function(){
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        while (currentHour >= targetHour) {
          clearInterval(interval);
          changeHTML();
        }
      }, 1000)

      function changeHTML(){
        const reminder = document.getElementById("Reminder");
        reminder.innerHTML = "Du hast kaum noch Zeit dein tägliches Ziel zu erreichen !!";
        const farbeÄndern = document.getElementById("Farbe");
        farbeÄndern.style.background = "red";
      }
    },
    addRow(button) {
      var table = document.getElementById("Wasserstand");
      var row = table.insertRow(table.rows.length);
      var nameCell = row.insertCell(0);
      var ageCell = row.insertCell(1);
      var countryCell = row.insertCell(2);
      var actionCell = row.insertCell(3);

      TagZeitCell.innerHTML = "New Tag,Zeit ";
      mengeCell.innerHTML = "New Menge";
      actionCell.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
    },

    deleteRow(button) {
      var row = button.parentNode.parentNode;
      row.parentNode.removeChild(row);
    },
    mounted(){
      this.setCurrentTime()
      this.invtervall()
      this.addRow(button)
      this.deleteRow(button)
    }
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

body {
  font-family: Montserrat;

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
  color : black;
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
  background-color: #f2f2f2;
  padding: 20px;
  text-align: left;
}
#intro{
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
}
#Verlauf{
margin: 20px;
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
  background-color: #0082e6;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>

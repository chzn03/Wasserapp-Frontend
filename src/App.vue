<template>
  <div id="app">
    <h1>{{ greeting }}</h1>

    <header>
      <h1>Drinking Water is fun!</h1>
      <nav id = "Farbe">
        <div id = "Reminder">Du hast noh genug Zeit um dein Ziel heute zu erreichen</div>
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
      <h2>Wasserstand</h2>
      <table>
        <thead>
        <tr>
          <th>Tag, Zeit</th>
          <th>Menge</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{{ daytime }}</td>
          <td>{{amount}}</td>
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
  mounted() {
    this.setCurrentTime();
    this.function();
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
    function(){

      const targetHour = 17;

      const interval = setInterval(function (){
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        while (currentHour >= targetHour) {
          clearInterval(interval);
          changeHTML();
        }
      }, 1000)

      function changeHTML(){
        const reminder = document.getElementById("Reminder");
        reminder.innerHTML = "Du hast kaum noch Zeit dein tägliches Ziel zu erreichen!!!!!!";
        const farbeÄndern = document.getElementById("Farbe");
        farbeÄndern.style.background = "red";
      }
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
  background: #0082e6;
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
  float: right;
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

table {
  width: 100%;
  border-collapse: collapse;
}

table th, table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

table th {
  background-color: #f2f2f2;
}

table tr:nth-child(even) {
  background-color: #f9f9f9;
}

table tr:hover {
  background-color: #f5f5f5;
}


</style>

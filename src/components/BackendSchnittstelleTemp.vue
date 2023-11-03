<template>
  <section id="background">
    <div className="wave wave1"></div>
    <div className="wave wave2"></div>
    <div className="wave wave3"></div>
  </section>

  <div id="app">
    <h1 id="greeting">{{ greeting }}</h1>

    <header id="Navigationsbar">
      <h1 id="name-head">Drinking Water is fun!</h1>
      <nav>
        <div id="Reminder">Du hast noch genug Zeit um dein Ziel heute zu erreichen</div>
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
      <h1 id="Tabellenüberschrift">Wasserstand</h1>
      Wie viel Wasser möchtest du heute Trinken? (in Liter) <input v-model="amountField" type="number" name="amount"
                                                                   id="amount"/> <br><br/>
      Wie viel Wasser hast du getrunken ? (in Liter) <input v-model="getrunkenField" type="number" name="getrunken"
                                                            id="getrunken"/> <br><br/>
      <button id="adding" type="button" @click="addRow()">Add</button>
      <br><br/>
      <table id="Wasserstand">
        <thead>
        <tr>
          <th>Tag, Zeit</th>
          <th>Tagesziel</th>
          <th>Menge</th>
          <th></th>
        </tr>
        </thead>
      </table>


    </main>

    <section id="Verlauf">
      <h2>Verlauf</h2>
      <p>Hier kannst du deine aktuellen Wasserverbrauchsdaten einsehen und vergleichen.</p>
      <p>Dein tägliches Ziel: <span id="Tagesziel"></span> Liter</p>
      <p id="water-consumption">Wasserverbrauch: <span id="trinken"></span> Liter</p>
    </section>

    <footer>
      <p>&copy; 2023 Wasser-App. Alle Rechte vorbehalten.</p>
    </footer>
  </div>
</template>

<script>

let userId = 1;
let getrunken = 0;
let saveCounter = 0;
export default {
  data() {
    return {
      greeting: '',
      daytime: '',
      getrunkenField: '',
      amountField: ''
    };
  },
  methods: {
    setCurrentTime() {
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
      const currentDate = new Date();
      const currentHour = currentDate.getHours();

      if (currentHour >= 5 && currentHour < 12) {
        this.daytime = 'Morgen';
      } else if (currentHour >= 12 && currentHour < 18) {
        this.daytime = 'Mittag';
      } else {
        this.daytime = 'Abend';
      }

      let resetGetrunken = parseFloat(getrunken);
      getrunken = parseFloat(getrunken) + parseFloat(document.getElementById('getrunken').value)
      const amount = document.getElementById('amount').value;
      var liters = parseFloat(getrunken);
      document.getElementById('Tagesziel').textContent = amount;
      document.getElementById('trinken').textContent = getrunken;


      const table = document.getElementById("Wasserstand");
      const row = table.insertRow(-1);

      const rowId = 'row' + (this.rowCounter + 1)
      row.setAttribute('id', rowId);

      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);

      const deleteButton = document.createElement('button'); // Create a new button element
      deleteButton.innerText = 'Delete';
      deleteButton.classList.add('deletion');

      cell1.innerHTML = this.daytime;
      cell2.innerHTML = amount + "L";
      cell3.innerHTML = liters.toFixed(1) + "L";
      cell4.appendChild(deleteButton)

      deleteButton.addEventListener('click', () => {
        getrunken = resetGetrunken;
        document.getElementById('trinken').textContent = getrunken;
        liters = parseFloat(getrunken);
        cell3.innerHtML = liters.toFixed(1) + "L";
        this.deleteRow(rowId);
      });
      this.rowCounter++; // Increment the row counter

      row.classList.add('rowDesign');

      if (saveCounter === 0) {
        this.save()
        saveCounter = 14;
      } else {
        this.change()
      }

    },

    invtervall() {
      const targetHour = 17;

      const interval = setInterval(function () {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        while ((currentHour > targetHour) && (getrunken < (document.getElementById('amount').value - 1))) {
          clearInterval(interval);
          changeHTML();
        }
      }, 1000)

      function changeHTML() {
        const reminder = document.getElementById("Reminder");
        reminder.innerHTML = "Du hast kaum noch Zeit dein tägliches Ziel zu erreichen !!";
        document.body.style.background = 'red';
      }
    },
    save() {
      const endpoint = 'http://localhost:8080/User'
      const data = {
        amount: this.amountField,
        getrunken: this.getrunkenField
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
            userId = parseFloat(data);
            console.log('Success', userId)
          })
          .catch(error => console.log('error', error))
    },
    change() {
      const reqOptions = {
        method: 'PUT',
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify({variable: parseInt(getrunken)})
      }
      fetch('http://localhost/users/' + userId, reqOptions)
          .then(response => response.json)
          .then(result => {
            console.log(result)
          })
          .catch(error => {
            console.error('Error:', error);
          })
    },
    mounted() {
      this.setCurrentTime()
      this.invtervall()
    }
  }
};
</script>

<style>
* {
  padding: 1px;
  margin: 1px;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

body {
  font-family: Montserrat;
  background-color: black;
}

#greeting {
  color: white;
}

#name-head {
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

#Reminder {
  color: white;
  font-size: 20px;
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

#intro {
  color: #dddddd;
  font-size: 20px;
  font-style: italic;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;

}

#Verlauf {
  color: #dddddd;
  margin: 20px;
}

#Verlauf h2 {
  font-style: inherit;

}

#Tabellenüberschrift {
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

.rowDesign {
  background-color: whitesmoke;
  font-size: larger;
}


#adding {
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

.deletion {
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


#background {
  position: absolute;
  width: 100%;
  height: 100vh;
  background: cornflowerblue;
  overflow: hidden;
  z-index: -1;
}

section.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  /*  background: url(../../../Downloads/wave.png);*/
  background-size: 1000px 100px;
  z-index: 1;
}

section .wave.wave1 {
  animation: animate 30s linear infinite;
}

</style>
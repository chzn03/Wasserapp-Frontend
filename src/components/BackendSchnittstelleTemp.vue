<template>
  <section id="background">
  </section>

  <div  >

  </div>

  <div id="app">
    <h1 id="greeting">{{ greeting }}</h1>

    <section id="intro">
      <h2>Willkommen bei Drinking Water is fun!</h2>
      <p>Mit dieser App kannst du deinen Wasserverbrauch verfolgen. Starte jetzt!!</p>
    </section>

    <header id="Navigationsbar">

      <nav>
        <div id="Reminder">Du hast noch genug Zeit um dein Ziel heute zu erreichen</div>
      </nav>

    </header>


    <main>
      <h1 id="Tabellenüberschrift">Wasserstand</h1>

      <div>
      <div class="input-container">
      Körpergewicht (in kg) <input v-model="weight" type="number" name="weight" id="weight"/><br><br/>  <button id="calculate" @click="calculateWeight">Calculate</button>
      </div>

      Wie viel Wasser möchtest du heute Trinken? (in Liter) <input v-model="amountField" type="number" name="amount"
                                                                   id="amount"/> <br><br/>
      Wie viel Wasser hast du getrunken ? (in Liter) <input v-model="getrunkenField" type="number" name="getrunken"
                                                            id="getrunken"/> <br><br/>
      <button id="adding" type="button" @click="addRow()">Add</button>
      <br><br/>

        <div v-if="result !== null">
          <p>Dein Bedarf liegt bei: {{ result }} L</p>
        </div>
      </div>


      <div className="notification">
        <span className="badge" onClick="this.parentElement.style.display='none';"></span>
        Du hast heute noch nicht genug Wasser getrunken
      </div>


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
      <p>&copy; 2024 Wasser-App. Alle Rechte vorbehalten.</p>
    </footer>
  </div>
</template>

<script>

let wasserId;
let getrunken = 0;
let result = 0;
export default {
  data() {
    return {
      greeting: '',
      daytime: '',
      getrunkenField: '',
      amountField: '',
      weight: '',
      result: null,
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



    updateTimer() {
      const currentDate = new Date();
      const midnight = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + 1, // Morgen um Mitternacht
          0, // Stunden
          0, // Minuten
          0 // Sekunden
      );

      const timeDifference = midnight - currentDate;
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      const timerText = `Du hast noch  ${hours}:${minutes}:${seconds} `+` um dein Ziel zu erreichen`;
      document.getElementById('Reminder').innerText = timerText;

      if (timeDifference <= 0) {
        // Countdown erreicht, handle entsprechend
        clearInterval(this.countdownInterval);
        document.getElementById('Reminder').innerText = "Mitternacht ist erreicht!";
      }

    },

    calculateWeight(){
      if (this.weight !== null && !isNaN(this.weight)) {
        this.result = this.weight * 30/1000;
      }

      else {
        alert('Please enter a valid weight.');
      }
      this.checker()

    },


    addRow() {

      try {

        if (!this.amountField || !this.getrunkenField) {
          alert('Please fill in both fields.');
          return;
        }

        const currentDate = new Date();
        const currentHour = currentDate.getHours();
        const targetHour = 12;

        if (currentHour >= 5 && currentHour < 12) {
          this.daytime = 'Morgen';
        } else if (currentHour >= 12 && currentHour < 18) {
          this.daytime = 'Mittag';
        } else {
          this.daytime = 'Abend';
        }
        const interval = setInterval(function () {
          const actualTime = new Date();
          const actualHour = actualTime.getHours();

          while ((actualHour > targetHour) && (getrunken < (document.getElementById('amount').value - 1))) {
            clearInterval(interval);
            changeHTML();
          }
        }, 1000)

        function changeHTML() {
          const reminder = document.getElementById("Reminder");
          reminder.innerHTML = "Du hast kaum noch Zeit dein tägliches Ziel zu erreichen !!";
          document.body.style.background = 'red';
        }

        let resetGetrunken = parseFloat(getrunken);
        getrunken = parseFloat(getrunken) + parseFloat(document.getElementById('getrunken').value)
        const amount = document.getElementById('amount').value;
        const differenz = (amount - getrunken).toString();


        var liters = parseFloat(getrunken);
        document.getElementById('Tagesziel').textContent = amount;
        document.getElementById('trinken').textContent = getrunken;


        const notificationText = differenz > 0
            ? `Du hast heute noch ${differenz} Liter Wasser zu trinken, um dein Ziel zu erreichen.`
            : "Du hast dein tägliches Wasserziel erreicht!";

        const notification = document.querySelector('.notification');
        notification.innerHTML = `<span class="badge" onclick="this.parentElement.style.display='none';"></span>${notificationText}`;

        if (differenz > 0) {
          notification.style.backgroundColor = 'red'; // Optional: Set color for reminder
        } else {
          notification.style.backgroundColor = 'green'; // Optional: Set color for goal achieved
        }

        this.updateTimer();

        // Set an interval to update the timer every second
        const timerInterval = setInterval(() => {
          this.updateTimer();
        }, 1000);


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

        this.save()

      } catch (error) {
        console.error('Starte die Webseite neu:', error);
        // Handle the error appropriately (e.g., show an error message to the user)
      } finally {
        // Enable the button regardless of success or failure
        document.getElementById('adding').disabled = false;
      }


    },

    checker(){
       var option = confirm('Willst du deinen vorgeschlagenen Bedarfswert ('+this.result+ 'L) als Ziel nutzen ?' );
        if(option === true){
        this.amountField = this.result.toFixed(2);
        }
       if(option === false){
         event.preventDefault();
       }


    },
    save() {
      const endpoint = 'http://localhost:8080/Wasser'
      const data = {
        //owner: this.claims.email,
        date: new Date().getDate(),
        tagesziel: this.amountField,
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
            wasserId = data.Id;
            console.log('Success ', wasserId)
          })
          .catch(error => console.log('error', error))
    },
    /*
    change() {
      const data = {
        //owner: this.claims.email,
        tagesziel: this.amountField,
        getrunken: this.getrunkenField
      }
      const reqOptions = {
        method: 'POST',
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch('http://localhost/update', reqOptions)
          .then(response => response.json)
          .then(result => {
            console.log(result)
          })
          .catch(error => {
            console.error('Error:', error);
          })
    },
    */

    async setup() {
      if (this.$root.authenticated) {
        this.claims = await this.$auth.getUser()
      }
    }
  },
  async created() {
    await this.setup()
  },
  mounted() {
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


nav {
  background: cornflowerblue;
  height: 40px;
  width: 100%;
  margin: 5px;
}

#Reminder {
  color: white;
  font-size: 20px;
}

.notification {
  background-color: #555;
  color: white;
  text-decoration: none;
  padding: 15px 26px;
  position: relative;
  display: inline-block;
  border-radius: 2px;
}

.notification:hover {
  background: red;
}

.notification .badge {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 5px 10px;
  border-radius: 50%;
  background: red;
  color: white;
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
  color: whitesmoke;
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
  background-color: white;
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

#calculate {
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
  height: 200vh;
  background: cornflowerblue;
  overflow: hidden;
  z-index: -1;
}

.input-container {
  display: flex;
  align-items: center;
}


</style>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Responsive Navbar</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="
style.css">


  <title>WasserApp</title>

  <style>
    /* Split the screen in half */
    .split {
      height: 100%;
      width: 50%;
      position: fixed;
      z-index: 1;
      top: 0;
      overflow-x: hidden;
      padding-top: 20px;
    }

    /* CSS-Styling hier einfügen */
  </style>
</head>
<body>


<header>
  <h1>WasserApp</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Verlauf</a></li>
      <li><a href="#">Einstellungen</a></li>
    </ul>
  </nav>
</header>

<main>
  <section id="intro">
    <h2>Willkommen bei der Wasser-App!</h2>
    <p>Mit dieser App kannst du deinen Wasserverbrauch verfolgen und (errinnert werden) ....</p>
    <button id="startButton" onclick="redirectToPage()"> Jetzt starten </button>

  </section>

  <section id="Verlauf">
    <h2>Verlauf</h2>
    <p>Hier kannst du deine aktuellen Wasserverbrauchsdaten einsehen und vergleichen.</p>
    <p>Dein tägliches Ziel: 2 Liter</p>
    <p id="water-consumption">Wasserverbrauch: <span id="consumption-value">0</span> Liter</p>



    <!-- Weitere Inhalte für Statistiken hier einfügen -->
  </section>


  <footer>
    <p>&copy; 2023 Wasser-App. Alle Rechte vorbehalten.</p>
  </footer>

</main>
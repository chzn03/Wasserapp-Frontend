<template>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Responsive Navbar</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="
style.css">
  </head>
  <footer>
    <p>&copy; 2023 Wasser-App. Alle Rechte vorbehalten.</p>
  </footer>

  </html>


    <title>WasserApp</title>

  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <li><a href="#">Wasserstand</a></li>
    <li><a href="#">Tagesziel</a></li>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

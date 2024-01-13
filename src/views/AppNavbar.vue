<!-- AppNavbar.vue -->
<template>
  <nav>
    <ul>
      <li v-for="route in routes" :key="route.path">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  props: {
    routes: Array, // Prop to receive routes from the parent
  },
};
</script>

<style scoped>
/* Your navbar styles here */
nav {
  background: cornflowerblue;
  height: 80px;
  width: 100%;
  margin: 5px;
}

ul {
  list-style: none;
}

li {
  display: inline-block;
  margin-right: 20px;
}

router-link {
  color: white;
  text-decoration: none;
  font-size: 15px;
}

router-link:hover {
  color: #ffd700; /* Change color on hover */
}
</style>

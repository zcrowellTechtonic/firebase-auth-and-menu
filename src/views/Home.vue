<template>
  <div>
    <!-- <h1>Hello Home</h1> -->
<!-- SUPER DUPER FANCY NAV BAR!!!!   -->
    <!-- <ul>
      <li>
        <a class="active" href="#home">Home</a>
      </li>
      <li>
        <router-link to="/helloworld">
        <a href="#news">News</a>
        </router-link>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#about" @click="logout">Logout</a>
      </li>
    </ul>
    <router-view /> -->
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "home",
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  font-size: 1.5em;
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
}

li a:hover {
  color: rgb(124, 124, 124);
}
</style>
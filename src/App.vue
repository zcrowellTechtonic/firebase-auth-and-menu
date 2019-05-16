<template>
  <div id="app">
    
      <img v-if="currentUser" alt="Vue logo" src="./assets/logo.png">
      <!-- <HelloWorld v-if="currentUser"></HelloWorld> -->
      <Navigation v-if="currentUser"></Navigation>
      <router-view />
    </div>
  
</template>

<script>
// import firebase from 'firebase'
import HelloWorld from './components/HelloWorld.vue'
import Navigation from './components/Navigation'
// const currentUser = firebase.auth().currentUser
import { mapState } from 'vuex'
// import Navigation from './components/Navigation'
export default {
  components: { HelloWorld, Navigation },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

a {
  margin: 30px;
}
</style>

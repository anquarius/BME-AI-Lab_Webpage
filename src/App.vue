<template>
  <div class="main-container">
    <NavBar />
    <router-view/>
    <FooterBar />
  </div>
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';

export default {
  name: "App",
  components: {
    NavBar,
    FooterBar,
  },
}
// @Options({
//   components: {
//     NavBar,
//   },
// })
// export default class Main extends Vue {}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-container {
  padding-top: 0px;
}

.section-container {
  padding-top: 200px;
  padding-bottom: 150px;
  padding-left: 25px;
  padding-right: 25px;

  .maintenence-container{
    max-width: 100%;

    img {
      max-width: 100%;
    }
  }
}

.bg-container {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;

  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;

  .background-image {
    background-image: url(https://images.unsplash.com/photo-1488831861984-179da3647265?dpr=2&auto=format&fit=crop&w=1500&h=938&q=80&cs=tinysrgb&crop=); 
    // -webkit-background-size: cover;
    // -moz-background-size: cover;
    // -o-background-size: cover;

    // background-size: cover;
    // background-position: center;
    // background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    opacity: 0.2;
  }
}
</style>

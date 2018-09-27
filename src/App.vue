<template>
  <div id="app">

      <header-app></header-app>

      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Poke-Vue</h1>
              <img src="./assets/pokeball.png" class="img-fluid" alt="..." id="pokeball-image">
          <br>
          <p class="lead text-muted">Basic information about the Pokémons you love.</p>
          <p>
            <!--<a href="#" class="btn btn-primary my-2">Loading...</a>-->
          </p>
        </div>
      </section>

      <router-view></router-view>

      <footer-app></footer-app>



  </div>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";
import PokemonGridApp from "./components/PokemonGridApp.vue";
import FooterApp from "./components/FooterApp.vue";

export default {
  name: "app",
  components: {
    HeaderApp,
    PokemonGridApp,
    FooterApp
  }
};
</script>

<style>
footer {
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #e9ecef;
}
#pokeball-image {
  width: 10%;
}
</style>

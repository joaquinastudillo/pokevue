<template>
    <section class="section">
        <div class="container">
          <div class="row">
            <!-- Pokemons coming --> 
            <pokemon-app :pokemons="pokemonObject.pokemonList"></pokemon-app>
            <!-- End Pokemons coming -->
          </div>
        </div>
      </section>
</template>

<script>
import PokemonApp from "../components/PokemonApp"

const axios = require("axios")

export default {
  name: "PokemonGridApp",
  data() {
    return {
      pokemonObject: {
        count: null,
        pokemonList: []
      },
      error: {}
    }
  },
  mounted() {
    this.fetchPokemons()
  },
  methods: {
    fetchPokemons() {
      const page_url = "https://pokeapi.co/api/v2/pokemon/"
      axios
        .get(page_url, {
          params: {
            header: {
              "Access-Control-Allow-Origin": "http://192.168.43.203:8080",
              "Access-Control-Allow-Methods": "*"
            }
          }
        })
        .then(response => {
          this.pokemon = response.data
          this.pokemonObject.count = response.data.count
          this.pokemonObject.pokemonList = response.data.results
        })
        .catch(error => {
          this.error = error
        })
    }
  },
  components: {
    PokemonApp
  }
}
</script>
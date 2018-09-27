<template>
     <div class="row">
        <div class="container">

             <div class="py-5 text-center">
                <img class="d-block mx-auto mb-4" :src="pokemonData.img" alt="" width="172" height="172">
                <h2>{{ pokemonData.information.name }}</h2>
            </div>

            <div class="container">
                <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Abilities</span>
                <span class="badge badge-secondary badge-pill">{{ countAbilities }}</span>
            </h4>
            <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-condensed" :key="ability.name" v-for="ability in pokemonData.information.abilities">
                <div>
                    <h6 class="my-0">{{ ability.ability.name }}</h6>
                </div>
                </li>
            </ul>
        </div>
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">Information</h4>
          <form class="needs-validation" novalidate="">

            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="" class="badge badge-info">Base Experience</label>
                <label for="" class="col-md-12 col-form-label">{{ pokemonData.information.base_experience }}</label>
              </div>
              <div class="col-md-6 mb-3">
                <label for="" class="badge badge-info">Height</label>
                <label for="" class="col-md-12 col-form-label">{{ pokemonData.information.height }}</label>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="" class="badge badge-info">Id</label>
                <label for="" class="col-md-12 col-form-label">{{ pokemonData.information.id }}</label>
              </div>
              <div class="col-md-6 mb-3">
                <label for="" class="badge badge-info">Weight</label>
                <label for="" class="col-md-12 col-form-label">{{ pokemonData.information.weight }}</label>
              </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                            <ul class="nav nav-pills">
                                <li class="nav-item">
                                    <router-link tag="a" active-class="active" :to="{name: 'specie', params: { speciesData: pokemonData.information.species}}" class="nav-link" exact>Info about specie</router-link>
                                </li>

                            </ul>
                    </div>

                    <br>

                    <div class="row">
                            <router-view></router-view>
                    </div>
                </div>
            </div>

            <br>
            <button @click="navigateToHome()" class="btn btn-primary btn-lg btn-block" type="submit">return</button>
            <br>

          </form>
        </div>
      </div>
            </div>
        </div>    
     </div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      url: "",
      pokemonData: {
        img: "",
        information: {}
      }
    };
  },
  beforeMount() {
    this.url = this.$route.query.url
  },
  mounted() {
    this.fetchPokemonData()
  },
  computed: {
      countAbilities(){
          if(this.pokemonData.information.abilities){
              return this.pokemonData.information.abilities.length
          }
      }
  },
  methods: {
    navigateToHome() {
      this.$router.push("/");
    },
    fetchPokemonData() {
      axios
        .get(this.url, {
          params: {
            header: {
              "Access-Control-Allow-Origin": "http://192.168.43.203:8080",
              "Access-Control-Allow-Methods": "*"
            }
          }
        })
        .then(response => {
          this.pokemonData.img = response.data.sprites.front_default
          this.pokemonData.information = response.data;
        })
        .catch(error => {
          this.error = error;
        })
    }
  }
}
</script>
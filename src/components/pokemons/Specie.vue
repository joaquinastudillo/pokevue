<template>
    <div class="col-md-12 order-md-1">
          <h4 class="mb-3">Specie</h4>

            <div class="row">
              <div class="col-md-6 mb-3" v-if="species.base_happiness">
                <label for="" class="badge badge-info">Base Happiness</label>
                <label for="" class="col-md-12 col-form-label">{{ species.base_happiness}}</label>
              </div>
              <div class="col-md-6 mb-3">
                <label for="" class="badge badge-info">Capture Rate</label>
                <label for="" class="col-md-12 col-form-label">{{ species.capture_rate}}</label>
              </div>
            </div>

            <div class="row">
                <div class="col-md-6" v-if="species.color">
                    <h3 class="mb-3">Color</h3>
                    <ul class="list-group">
                        <li class="list-group-item">{{ species.color.name }}</li>
                    </ul>
                </div>

                <div class="col-md-6" v-if="species.egg_groups">
                    <h3 class="mb-3">Egg Groups</h3>
                    <ul class="list-group">
                        <li class="list-group-item" :key="egg.url" v-for="egg in species.egg_groups">{{ egg.name }}</li>
                    </ul>
                </div>
            </div>


            <div class="row" v-if="species.evolves_from_species">
                <div class="col-md-12">
                    <h3 class="mb-3">Evolves from</h3>
                    <ul class="list-group">
                        <li class="list-group-item">{{ species.evolves_from_species.name }}</li>
                    </ul>
                </div>
            </div>

            <br>

            <div class="row" v-if="species.generation">
                <div class="col-md-12">
                    <h3 class="mb-3">Generation</h3>
                    <ul class="list-group">
                        <li class="list-group-item">{{ species.generation.name }}</li>
                    </ul>
                </div>
            </div>

            <br>

            <div class="row">
                <div class="col-md-6" v-if="species.growth_rate">
                    <h3 class="mb-3">Growth Rate</h3>
                    <ul class="list-group">
                        <li class="list-group-item">{{ species.growth_rate.name }}</li>
                    </ul>
                </div>

                <div class="col-md-6" v-if="species.habitat">
                    <h3 class="mb-3">Habitat</h3>
                    <ul class="list-group">
                        <li class="list-group-item">{{ species.habitat.name }}</li>
                    </ul>
                </div>
            </div>

            <br>

            <div class="row" v-if="species.shape">
                <div class="col-md-12">
                    <h3 class="mb-3">Shape</h3>
                    <ul class="list-group">
                        <li class="list-group-item">{{ species.shape.name }}</li>
                    </ul>
                </div>
            </div>

            <br>

            <div class="row" v-if="species.varieties">
                <div class="col-md-12">
                    <h3 class="mb-3">Varieties</h3>
                    <ul class="list-group">
                        <li class="list-group-item" :key="variety.pokemon.url" v-for="variety in species.varieties">{{ variety.pokemon.name }}</li>
                    </ul>
                </div>
            </div>
            
    </div>
</template>


<script>

const axios = require("axios")

export default {
  name: "Specie",
  data() {
    return {
      urlSpecies: "",
      species: {}
    }
  },
  beforeMount() {
      this.urlSpecies = this.$route.params.speciesData.url
  },
  mounted() {
    this.fetchSpecies()
  },
  methods: {
    fetchSpecies() {
      axios
        .get(this.urlSpecies, {
          params: {
            header: {
              "Access-Control-Allow-Origin": "http://192.168.43.203:8080",
              "Access-Control-Allow-Methods": "*"
            }
          }
        })
        .then(response => {
          this.species = response.data;
        })
        .catch(error => {
          this.error = error;
        })
    }
  }
}
</script>
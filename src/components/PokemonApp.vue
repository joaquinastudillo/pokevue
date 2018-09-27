<template>
            <div class="col-md-12">
                <router-view></router-view>
                <div class="list-group">
                    <router-link 
                        :to="{path: '/pokemon', query: { url: pokemon.url }}" 
                        tag="a" 
                        class="list-group-item list-group-item-action" 
                        :key="pokemon.name" 
                        v-for="pokemon in paginatedData">
                            <a>
                                {{ pokemon.name }}
                            </a>
                    </router-link>
                </div>
                
                <br> 

                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item">
                            <button 
                            class="page-link" 
                            @click="prevPage" 
                            tabindex="-1" 
                            :disabled="pageNumber === 0">
                            Previous
                            </button>
                        </li>
                        <li class="page-item">
                            <button 
                            class="page-link" 
                            @click="nextPage" :disabled="pageNumber >= pageCount -1">
                            Next
                            </button>
                        </li>
                    </ul>
                </nav>

            </div>
</template>

<script>
export default {
  name: "PokemonApp",
  data() {
    return {
      pageNumber: 0
    }
  },
  props: {
    pokemons: {
      type: Array,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 10
    }
  },
  methods: {
    nextPage() {
      this.pageNumber++
    },
    prevPage() {
      this.pageNumber--
    }
  },
  computed: {
    pageCount() {
      let l = this.pokemons.length,
        s = this.size
      return Math.floor(l / s)
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.pokemons.slice(start, end)
    }
  }
}
</script>

<style>

</style>
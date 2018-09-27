import PokemonGrid from './components/PokemonGridApp.vue'
import Pokemon from './components/Pokemon.vue'
import Specie from './components/pokemons/Specie.vue'

export const routes = [
    {
        path: '',
        component: PokemonGrid
    },
    {
        path: '/pokemon',
        component: Pokemon,
        children: [
            {
                path: 'specie',
                component: Specie,
                name: 'specie'
            }
        ]
    }
]
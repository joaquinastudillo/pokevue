<template>
    <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Abilities</span>
            <span class="badge badge-secondary badge-pill">{{ countAbilities }}</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">name hab</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$12</span>
            </li>
          </ul>
    </div>
</template>

<script>
export default {
  props: {
    listAbilities: []
  },
  computed: {
    countAbilities() {
      if (this.pokemonData.information.abilities) {
        return this.pokemonData.information.abilities.length;
      }
    }
  }
};
</script>


<template lang="pug">
div
    ol
        li(v-for="vehicle in vehicles" v-bind:key="vehicle.id") {{vehicle.make}} {{vehicle.model}} 
    button(v-on:click="addVehicle") Add Vehicle
</template>

<script>
export default {
  name: "MyVehicle",
  data: function() {
    return {
      vehicles: [
        { id: 1, make: "Vauxhaul", model: "Corsa" },
        { id: 2, make: "Vauxhaul", model: "Insignia" },
        { id: 3, make: "Ford", model: "Mondeo" }
      ],
      id: 4
    };
  },
  methods: {
    addVehicle: function() {
      this.vehicles.push({ id: this.id, make: "Ford", model: "Mondeo" });
      this.id++;
    }
  }
};
</script>

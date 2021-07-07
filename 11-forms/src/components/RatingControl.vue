<template>
  <ul>
    <li :class="{active:modelValue === 'Poor'}">
      <button @click="activate('Poor')" type="button">Poor</button>
    </li>
    <li :class="{active:modelValue === 'Average'}">
      <button @click="activate('Average')" type="button">Average</button>
    </li>
    <li :class="{active:modelValue === 'Great'}">
      <button @click="activate('Great')" type="button">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RatingControl",
  props:['modelValue'],
  emits:['update:modelValue'],
  // data() {
  //   return {
  //     activeOption: this.modelValue
  //   };
  // },
  computed:{
    activeOption() {
      return this.modelValue;
    }
  },
  methods: {
    activate(option) {
      this.$emit('update:modelValue',option)
    }
  }
}
</script>

<style scoped>
.active {
  border:3px solid  #3a0061;
}

.active button {
  border:3px solid  #3a0061;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <Button @click="addOne">Add 10</Button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from "./components/TheCounter";
import ChangeCounter from "./components/ChangeCounter";
import FavoriteValue from "./components/FavoriteValue";
import UserAuth from "./components/UserAuth";

export default {
  components: {
    UserAuth,
    FavoriteValue,
    ChangeCounter,
    TheCounter,
    BaseContainer,
  },

  methods: {
    addOne() {
      this.$store.dispatch('numbers/increase', {value: 10});
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },

  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
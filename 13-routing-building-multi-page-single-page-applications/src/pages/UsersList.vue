<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Saved Changed</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      changeSaved: false
    };
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      // do something
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changeSaved = true
    }
  }, beforeRouteEnter(to, from, next) {
    console.log('eee')
    console.log(to, from, next);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from);
    if (this.changeSaved) {
      next();
    } else {
      const userWatToLeaves = confirm('Are you Sure ?');
      next(userWatToLeaves);
    }
  },
  unmounted() {
    console.log('unmounted');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "FriendContact",
  data(){
    return{
      detailsAreVisible: false,
      friend:
          {
            id: 'Manuel ',
            name: 'Manuel Lorenz',
            phone: '01234 5678 991',
            email: 'manuel@localhost.com'
          }
    };
  },
  methods:{
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
}
</script>

<style scoped>

</style>
<script>
import ClavierContact from '../components/ClavierContact.vue';

export default {
  components: {
    ClavierContact
  },
  methods: {
    handleKeyPress(number) {
      console.log(number);
    }
  }
}
</script>

<template>
  <div>
    <h1>Clavier</h1>
    <ClavierContact @keyPress="handleKeyPress" />
  </div>
</template>

<style scoped>
</style>
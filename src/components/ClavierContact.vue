<script>
export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    }
  },
  methods: {
    pressKey(number) {
      this.$emit('keyPress', number);
    }
  }
}
</script>

<template>
    <div class="keypad">
      <button v-for="number in numbers" :key="number" @click="pressKey(number)">
        {{ number }}
      </button>
    </div>
  </template>


<style scoped>
.keypad {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

}

button {
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
}
</style>
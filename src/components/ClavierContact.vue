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
  justify-content: center;
  grid-template-columns: repeat(3, 60px);
  gap: 5px;
  padding: 10px;
  background-color: #1c1c1e;
  border-radius: 15px;
 
}

button {
  width: 60px;
  height:60px;
  padding: 5px;
  font-size: 20px;
  border-radius: 50%;
  border: none;
  background-color: #4a4a4e;
  color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  outline: none;
  transition: background-color 0.3s ease;
}

button:active {
  background-color: #5a5a5e;
}
</style>
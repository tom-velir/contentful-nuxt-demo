<template>
  <div>
    <div>{{ number }}</div>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
// Basic state management in Vue
const number = ref(0);

function increment() {
  number.value++;
}
</script>

<style lang="scss" scoped>
button {
  background: var(--color-primary);
}
</style>

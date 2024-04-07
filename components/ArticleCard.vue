<template>
  <article>
    <header>
      <h3>{{ title }}</h3>
      <p v-if="author">By {{ author }}</p>
    </header>
    <p>{{ summary }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  summary: string;
  author: string;
}>();
</script>

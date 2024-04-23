<template>
  <article class="article-card" :aria-label="title">
    <header class="article-card__header">
      <h3 class="article-card__title">{{ title }}</h3>
      <p v-if="author" class="article-card__author">By {{ author }}</p>
    </header>
    <div class="article-card__content">
      <RichTextRenderer :document="content" />
    </div>
  </article>
</template>

<script setup lang="ts">
import RichTextRenderer from "contentful-rich-text-vue-renderer";

defineProps<{
  title: string;
  content: object;
  author?: string;
}>();
</script>

<style lang="scss" scoped>
.article-card {
  padding: 1rem;
  border: 2px solid rgb(154, 189, 174);
  border-radius: 5px;
}

.article-card__title {
  margin: 0;
}
</style>

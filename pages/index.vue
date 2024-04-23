<template>
  <h2>Articles</h2>
  <ul v-if="!pending">
    <li v-for="article in data.items" :key="article.sys.id">
      <ArticleCard
        :title="article.fields.title"
        :content="article.fields.content"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
const { data, pending } = await useFetch("/api/contentful", {
  query: { contentType: "article" },
});
</script>

<style scoped lang="scss">
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

ul > * + * {
  margin-top: 1rem;
}
</style>

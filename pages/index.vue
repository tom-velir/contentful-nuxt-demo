<template>
  <h2>Articles</h2>
  <ul class="article-grid">
    <li v-for="article in data.items" :key="article.sys.id">
      <article class="article" aria-label="placeholder">
        <header>
          <h3>{{ article.fields.title }}</h3>
          <p v-if="article.fields.author">By John Doe</p>
        </header>
        <div>
          {{ article.fields.content }}
        </div>
      </article>
    </li>
  </ul>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const { data, pending, error, refresh } = await useFetch("/api/contentful", {
  query: { contentType: "article" },
});
console.log({ data: data.value });
</script>

<style scoped lang="scss">
.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 0;
  list-style: none;
}
</style>

<template>
  <header>
    <nav aria-label="primary">
      <h1 aria-label="Lorem Ipsum Co. Logo">
        <NuxtLink href="/"
          ><img src="assets/images/logoipsum-311.svg"
        /></NuxtLink>
      </h1>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/authors">Authors</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
  gap: 2rem;
  font-weight: bold;
  list-style: none;
  letter-spacing: 0.4px;
  text-transform: uppercase;
}
</style>

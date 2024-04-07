<template>
  <header>
    <nav aria-label="primary">
      <NuxtLink href="/">
        <h1>
          <img src="assets/images/logo-emblem.svg" alt="" />
          Lorem Ipsum Co.
        </h1>
      </NuxtLink>
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

h1 {
  display: flex;
  gap: 1rem;
  text-decoration: underline;
  text-decoration-color: var(--color-primary);

  &:hover,
  &:focus {
    opacity: 0.9;
  }
}

ul {
  display: flex;
  gap: 2rem;
  padding: 0;
  font-size: 1rem;
  font-weight: bold;
  list-style: none;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
</style>

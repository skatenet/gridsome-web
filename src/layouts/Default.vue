<template>
  <div class="">
    <header class="">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="p-button p-button-link" to="/">Home</g-link>
        <g-link class="p-button p-button-link">Products</g-link>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <!--Footer-->
    <footer class="p-d-flex">
      <h4 class="h-3">Social</h4>
      <ul>
        <li v-for="account in $static.socialAccounts.edges" :key="account.id">
          <a :href="account.node.url">{{ account.node.name }}</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<static-query type="graphql">
query {
  metadata {
    siteName
  }
  socialAccounts: allContentfulSocialMediaAccount {
    edges {
      node {
        id
        name
        url
      }
    }
  }
}
</static-query>

<style>
body {
  font-family: var(--font-family);
  font-weight: 400;
  color: var(--text-color);
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background-color: var(--surface-a);
}
</style>

<template>
  <div class="">
    <header class="">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/products/">Products</g-link>
        <!--<g-link class="nav__link" to="/about/">About</g-link>-->
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <!--Footer-->
    <footer>
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
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>

<template>
  <div class="">
    <header class="">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <q-button @click="$router.push('/')">Home</q-button>
        <q-button @click="$router.push('/products')">Products</q-button>
        <!--<g-link to="/about/">About</g-link>-->
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
          <a :href="account.node.url">
            <font-awesome-icon
              size="3x"
              :icon="`fa-brands fa-${account.node.name.toLowerCase()}`"
            />
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<static-query>
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

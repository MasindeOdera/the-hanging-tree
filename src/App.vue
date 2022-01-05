<template>
  <div id="app">
    <div id="nav">
      <router-link to="/the-hanging-tree/">Home</router-link> |
      <router-link to="/the-hanging-tree/about">About</router-link> |
      <router-link to="/the-hanging-tree/results">Results</router-link> |
      <router-link to="/the-hanging-tree/settings">Settings</router-link> |
      <router-link to="/the-hanging-tree/extra" data-test-id="extra"
        >Extra</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background-color: #ccf2ff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

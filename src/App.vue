<template>
  <div id="app">
    <Navigation />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

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

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateX(2em);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }
}
</style>

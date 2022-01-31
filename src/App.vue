<template>
  <div id="app" :class="{ dark: theme === 'dark' }">
    <Navigation />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Navigation,
  },
  methods: {
    ...mapActions(["updateTheme"]),
  },
  computed: {
    ...mapGetters({
      theme: "getTheme",
    }),
  },
};
</script>

<style lang="scss">
body {
  background-color: #ccf2ff;
}
body.dark,
.dark {
  background-color: #132639;
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

<template>
  <div id="app" :class="{ dark: theme === 'dark' }">
    <Navigation />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Soundtrack />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Soundtrack from "@/components/Soundtrack.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Navigation,
    Soundtrack,
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
  -webkit-transition: background-color 160ms linear;
  -ms-transition: background-color 160ms linear;
  transition: background-color 160ms linear;
}
body.dark,
.dark {
  background-color: #132639;
  -webkit-transition: background-color 60ms ease-out;
  -ms-transition: background-color 60ms ease-out;
  transition: background-color 60ms ease-out;
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

<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Hangman />
    <MysteryWord />
    <Letters />
    <LandingPage />
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from "@/components/LandingPage.vue";
import Hangman from "@/components/Hangman.vue";
import Letters from "@/components/Letters.vue";
import MysteryWord from "@/components/MysteryWord.vue";

export default {
  name: "Home",
  components: {
    Hangman,
    LandingPage,
    Letters,
    MysteryWord,
  },
};
</script>

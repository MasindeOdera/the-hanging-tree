<template>
  <div class="home">
    <Hangman />
    <MysteryWord />
    <Letters />
  </div>
</template>

<script>
// @ is an alias to /src
import Hangman from "@/components/Hangman.vue";
import Letters from "@/components/Letters.vue";
import MysteryWord from "@/components/MysteryWord.vue";

export default {
  name: "Home",
  components: {
    Hangman,
    Letters,
    MysteryWord,
  },
};
</script>

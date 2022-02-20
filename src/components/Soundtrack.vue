<template>
  <div>
    <audio
      loop
      ref="soundtrack"
      src="../assets/James_Newton_Howard_Ft._Jennifer_Lawrence-The_Hanging_Tree-320k.mp3"
      :title="this.music"
    ></audio>
    <button class="play" v-on:click="play" type="play" hidden>Theme</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Soundtrack",
  methods: {
    play() {
      let audio = this.$refs.soundtrack;
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    },
  },
  computed: {
    ...mapGetters({
      music: "getSoundtrack",
    }),
  },
  watch: {
    music(newValue, oldValue) {
      console.log(`Updated Music toggle from ${oldValue} to ${newValue}`);
      if (newValue) {
        this.play(true);
        console.log(
          `On true updated Music toggle from ${oldValue} to ${newValue}`
        );
      } else {
        this.play(false);
        console.log(
          `On false, updated Music toggle from ${oldValue} to ${newValue}`
        );
      }
    },
  },
};
</script>

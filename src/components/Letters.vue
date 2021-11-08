<template>
  <div
    class="letters"
    v-bind:class="{
      standby: !this.started || this.stage !== 'play' || this.attempts === 0,
    }"
  >
    <div
      class="alphabet"
      v-for="(letter, index) in alphabetOptions"
      :key="index"
    >
      <button
        v-bind:class="[{ button: letter.choice, selected: letter.chosen }]"
        @click="
          (letter.chosen = !letter.chosen),
            bringTreeIntoView(letter.choice, letter.chosen)
        "
      >
        <b v-bind:class="{ selected: letter.chosen }">{{ letter.choice }}</b>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Letters",
  methods: {
    ...mapActions(["setAlphabetOptions", "selectButton"]),
    bringTreeIntoView(choice, chosen) {
      // Only update store if game has started.
      if (this.stage === "play") {
        this.selectButton(choice, chosen);
      }
    },
  },
  computed: {
    ...mapGetters({
      alphabetOptions: "getAlphabetOptions",
      started: "getGame",
      attempts: "getAttempts",
      stage: "getStage",
    }),
  },
};
</script>

<style lang="scss" scoped>
.letters {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  justify-content: center;
  margin: auto;
  &.standby {
    pointer-events: none;
  }
  .alphabet {
    .button {
      margin: 0.4rem;
      padding: 0.75rem 1.25rem;
      background-color: #00bfa6;
      border: none;
      border-radius: 4px 34px;
      cursor: pointer;
      &.selected {
        color: red;
        pointer-events: none;
        cursor: initial;
        background-color: #044b41;
      }
    }
  }
}
</style>

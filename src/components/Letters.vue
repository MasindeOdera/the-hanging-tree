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
        v-bind:class="[
          'btn btn-action s-circle',
          {
            button: letter.choice,
            disabled: letter.status == 'disabled',
            loading: letter.status == 'loading',
          },
        ]"
        @click="
          (letter.status = 'loading'),
            bringTreeIntoView(letter.choice, letter.chosen, letter.loading)
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
    bringTreeIntoView(choice, chosen, loading) {
      // Only update store if game has started.
      if (this.stage === "play") {
        this.selectButton({ choice, chosen, loading });
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
      // padding: 0.75rem 1.25rem;
      background-color: #00bfa6;
      border: 0.05rem solid #00bfa6 !important;
      color: #000;
      // border: none;
      // border-radius: 4px 34px;
      cursor: pointer;
      &.selected,
      &.disabled {
        color: red;
        pointer-events: none;
        cursor: initial;
        background-color: #044b41;
        border: 0.05rem solid #044b41 !important;
      }
    }
  }
}
</style>

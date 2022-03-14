<template>
  <div class="mystery">
    <button
      class="start btn-action"
      @click="beginGame()"
      v-show="stage === 'start'"
    >
      <b>Start</b>
    </button>
    <div class="hidden-word" v-show="stage === 'play'">
      <div
        v-for="(word, index) in mysteryWord"
        :key="index"
        v-bind:class="showLetter(word)"
      >
        {{ word }}
      </div>
    </div>
    <h1 class="reveal-word" v-show="stage === 'stop'">
      It was {{ mysteryWord }}
    </h1>
    <button
      class="again"
      @click="replay()"
      v-show="stage === 'stop' || (stage === 'play' && length === 0)"
    >
      <b>Play again?</b>
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MysteryWord",
  methods: {
    ...mapActions(["fetchLetters", "startGame", "replayGame", "saveResults"]),
    showLetter: function (word) {
      return {
        reveal:
          this.guessed.includes(word) ||
          this.guessed.includes(word.toString().toLowerCase()),
        empty: word === " ",
        hiddenLetter: word,
      };
    },
    beginGame() {
      this.fetchLetters();
      this.startGame();
    },
    replay() {
      this.saveResults();
      this.replayGame();
      this.fetchLetters();
      this.startGame();
    },
  },
  computed: {
    ...mapGetters({
      guessed: "getGuess",
      mysteryWord: "getMysteryWord",
      start: "getGame",
      attempts: "getAttempts",
      stage: "getStage",
      length: "getWordLength",
    }),
  },
};
</script>

<style lang="scss" scoped>
.dark .home .mystery {
  li {
    background: #d9d9d9;
    border-bottom: #d9d9d9;
    border-bottom-style: solid;
    color: #d9d9d9;
  }
}
.mystery {
  margin: auto;
  width: 92%;
  .start,
  .again {
    margin: 0.8rem;
    padding: 0.5rem;
    // padding: 0.75rem 1.25rem;
    color: #000;
    background-color: #00bfa6;
    border: none;
    border-radius: 34px;
    cursor: pointer;
    transition: width 4s, height 4s;
  }
  .hidden-word {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    justify-content: center;
    transition: width 4s, height 4s;
    cursor: default;
    margin-bottom: 2px;
    .hiddenLetter {
      width: 30px;
      padding: 0px 6px;
      margin: auto 2px;
      background: #2c3e50;
      border-bottom: #2c3e50;
      border-bottom-style: solid;
      font-size: 30px;
      font-weight: 500;
      font-feature-settings: normal;
    }
    .reveal {
      background: transparent !important;
      transition: width 4s, height 4s;
    }
    .empty:before {
      content: "\A";
      white-space: pre;
      display: block;
    }
    .empty {
      background: none;
      border-bottom: none;
      width: 100vw;
      height: 10px;
    }
  }
  .reveal-word {
    padding: 0px 6px;
    margin: auto 2px;
    transition: width 4s, height 4s;
  }
}
</style>

<template>
  <div class="results">
    <h2>No noose is good noose</h2>
    <div class="empty" v-show="results.length < 1">
      <p class="empty-title h4">
        Result displayed once the following game has started.
      </p>
    </div>
    <div class="table-container">
      <table
        class="table table-striped table-hover"
        v-show="results.length > 0"
      >
        <thead>
          <tr>
            <th>Game N<sup>o</sup></th>
            <th>Word</th>
            <th>N<sup>o</sup> Guesses</th>
          </tr>
        </thead>
        <tbody>
          <tr class="" v-for="(res, index) in results" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ res[0] }}</td>
            <td>{{ 7 - res[1] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="clear" @click="clearResults()" v-show="results.length > 3">
      <b>Clear results?</b>
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Results",
  methods: {
    ...mapActions(["clearSavedResults"]),
    clearResults() {
      this.clearSavedResults();
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
      results: "getResults",
    }),
  },
};
</script>

<style lang="scss" scoped>
.results {
  margin: 3rem auto;
  width: 70%;
  text-align: center;
  cursor: default;
  .table-container {
    height: 400px;
    overflow: auto;
    .table {
      text-align: center;
    }
  }
  .clear {
    margin: 0.8rem;
    padding: 0.5rem;
    color: #000;
    background-color: #00bfa6;
    border: none;
    border-radius: 34px;
    cursor: pointer;
    transition: width 4s, height 4s;
  }
}
.dark .results {
  color: #008b8b;
  .table.table-striped tbody tr:nth-of-type(odd) {
    background: #d9d9d9 !important;
  }
  .table.table-hover tbody tr:hover {
    background: #bcc3ce !important;
  }
  .clear {
    background-color: #008b8b;
  }
}
</style>

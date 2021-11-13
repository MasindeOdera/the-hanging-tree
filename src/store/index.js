import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alphabetOptions: [
      {
        choice: "a",
        chosen: false,
      },
      {
        choice: "b",
        chosen: false,
      },
      {
        choice: "c",
        chosen: false,
      },
      {
        choice: "d",
        chosen: false,
      },
      {
        choice: "e",
        chosen: false,
      },
      {
        choice: "f",
        chosen: false,
      },
      {
        choice: "g",
        chosen: false,
      },
      {
        choice: "h",
        chosen: false,
      },
      {
        choice: "i",
        chosen: false,
      },
      {
        choice: "j",
        chosen: false,
      },
      {
        choice: "k",
        chosen: false,
      },
      {
        choice: "l",
        chosen: false,
      },
      {
        choice: "m",
        chosen: false,
      },
      {
        choice: "n",
        chosen: false,
      },
      {
        choice: "o",
        chosen: false,
      },
      {
        choice: "p",
        chosen: false,
      },
      {
        choice: "q",
        chosen: false,
      },
      {
        choice: "r",
        chosen: false,
      },
      {
        choice: "s",
        chosen: false,
      },
      {
        choice: "t",
        chosen: false,
      },
      {
        choice: "u",
        chosen: false,
      },
      {
        choice: "v",
        chosen: false,
      },
      {
        choice: "w",
        chosen: false,
      },
      {
        choice: "x",
        chosen: false,
      },
      {
        choice: "y",
        chosen: false,
      },
      {
        choice: "z",
        chosen: false,
      },
    ],
    animals: [
      "frog",
      "dog",
      "cat",
      "mouse",
      "rabbit",
      "hare",
      "horse",
      "donkey",
      "elephant",
      "bird",
      "monkey",
      "lion",
      "giraffe",
      "tiger",
      "chicken",
      "bear",
      "sheep",
      "fox",
      "goat",
      "parrot",
      "kangaroo",
      "gorilla",
      "raccoon",
      "wolf",
      "eagle",
      "panda",
      "cheetah",
      "spider",
      "shark",
      "goose",
      "squirrel",
      "deer",
    ],
    mysteryWord: "",
    buttonSelected: false,
    guess: [],
    incorrectChoice: [],
    attempts: 7,
    game: false,
    status: ["start", "play", "stop"],
    stage: "start",
    wordLength: 0,
  },
  mutations: {
    //syncronous
    setAlphabetOptions(state, payload) {
      state.alphabetOptions = payload;
    },
    setAnimals(state, payload) {
      state.animals = payload;
    },
    setMysteryWord(state, payload) {
      state.mysteryWord = payload;
    },
    setButtonSelected(state, payload) {
      state.buttonSelected = payload;
    },
    setGuess(state, payload) {
      state.guess = payload;
    },
    setIncorrectChoice(state, payload) {
      state.incorrectChoice = payload;
    },
    setAttempts(state, payload) {
      state.attempts = payload;
    },
    reduceAttempt(state) {
      state.attempts--;
    },
    startGame(state, payload) {
      state.game = payload;
    },
    setStage(state, payload) {
      state.stage = payload;
    },
    reduceWordLength(state, payload) {
      state.wordLength = payload;
    },
  },
  actions: {
    // Asyncronous
    async fetchLetters({ commit }) {
      const animal =
        this.state.animals[
          Math.floor(Math.random() * this.state.animals.length)
        ];
      commit("setMysteryWord", animal);
      commit("reduceWordLength", animal.length);
    },
    async selectButton({ commit }, choice) {
      // Add guessed letter to array.
      if (this.state.mysteryWord.includes(choice)) {
        this.state.guess.push(choice);
        let count = this.state.mysteryWord.split(choice).length - 1;
        let reduced = this.state.wordLength - count;
        commit("reduceWordLength", reduced);
      } else {
        this.state.incorrectChoice.push(choice);
        commit("reduceAttempt");
      }
      commit("setButtonSelected", true);
      // Update game status to "stop".
      if (this.state.attempts === 0) {
        let option = this.state.status[2];
        commit("setStage", option);
      }
    },
    async startGame({ commit }) {
      commit("startGame", true);
      // Update game status to "play".
      let option = this.state.status[1];
      commit("setStage", option);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 500);
    },
    async replayGame({ commit }) {
      commit("setAttempts", 7);
      commit("setGuess", []);
      commit("setIncorrectChoice", []);
      // Update game status to "start".
      let option = this.state.status[0];
      commit("setStage", option);
      // Reset letter booleans.
      Object.values(this.state.alphabetOptions).forEach(
        (alphabetOptions) => (alphabetOptions.chosen = false)
      );
      // Reset to false for next game.
      commit("setButtonSelected", false);
    },
  },
  modules: {},
  getters: {
    getAlphabetOptions: (state) => state.alphabetOptions,
    getAnimals: (state) => state.animals,
    getMysteryWord: (state) => state.mysteryWord,
    getButtonSelected: (state) => state.buttonSelected,
    getGuess: (state) => state.guess,
    getAttempts: (state) => state.attempts,
    getGame: (state) => state.game,
    getStage: (state) => state.stage,
    getWordLength: (state) => state.wordLength,
    getIncorrectChoice: (state) => state.incorrectChoice,
  },
});

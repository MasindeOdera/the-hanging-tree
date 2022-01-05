import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alphabetOptions: [
      {
        choice: "a",
        chosen: false,
        status: "",
      },
      {
        choice: "b",
        chosen: false,
        status: "",
      },
      {
        choice: "c",
        chosen: false,
        status: "",
      },
      {
        choice: "d",
        chosen: false,
        status: "",
      },
      {
        choice: "e",
        chosen: false,
        status: "",
      },
      {
        choice: "f",
        chosen: false,
        status: "",
      },
      {
        choice: "g",
        chosen: false,
        status: "",
      },
      {
        choice: "h",
        chosen: false,
        status: "",
      },
      {
        choice: "i",
        chosen: false,
        status: "",
      },
      {
        choice: "j",
        chosen: false,
        status: "",
      },
      {
        choice: "k",
        chosen: false,
        status: "",
      },
      {
        choice: "l",
        chosen: false,
        status: "",
      },
      {
        choice: "m",
        chosen: false,
        status: "",
      },
      {
        choice: "n",
        chosen: false,
        status: "",
      },
      {
        choice: "o",
        chosen: false,
        status: "",
      },
      {
        choice: "p",
        chosen: false,
        status: "",
      },
      {
        choice: "q",
        chosen: false,
        status: "",
      },
      {
        choice: "r",
        chosen: false,
        status: "",
      },
      {
        choice: "s",
        chosen: false,
        status: "",
      },
      {
        choice: "t",
        chosen: false,
        status: "",
      },
      {
        choice: "u",
        chosen: false,
        status: "",
      },
      {
        choice: "v",
        chosen: false,
        status: "",
      },
      {
        choice: "w",
        chosen: false,
        status: "",
      },
      {
        choice: "x",
        chosen: false,
        lstatus: "",
      },
      {
        choice: "y",
        chosen: false,
        status: "",
      },
      {
        choice: "z",
        chosen: false,
        status: "",
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
    toggleLoading(state, payload) {
      state.alphabetOptions = payload;
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
    // Create an action for loading.
    async selectButton({ commit }, letter) {
      const { choice } = letter;
      // Disable selected button.
      for (let i = 0; i < this.state.alphabetOptions.length; i++) {
        if (this.state.alphabetOptions[i].status === "loading") {
          // Update letter status after 0.25 second.
          setTimeout(() => {
            this.state.alphabetOptions[i].status = choice;
            this.state.alphabetOptions[i].chosen = true;
            this.state.alphabetOptions[i].status = "displayed";
          }, 250);
        }
      }
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
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 500);
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
        (alphabetOptions) => (
          (alphabetOptions.status = ""), (alphabetOptions.chosen = false)
        )
      );
      // Reset to false for next game.
      commit("setButtonSelected", false);
      setTimeout(() => {
        // Draw the user's attention to the lives count.
        document.getElementByClassName("count").scrollIntoView();
      }, 500);
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

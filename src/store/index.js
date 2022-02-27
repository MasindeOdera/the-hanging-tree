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
    beers: [
      "Brouwerij Troost",
      "Oedipus",
      "Brouwerij ‘t IJ",
      "Brouwerij De Prael",
      "Bierfabrik",
      "Walhalla",
      "Bruut Bier",
      "Butcher’s Tears",
      "De Bekeerde Suster",
      "Proeflokaal Arendsnest",
      "In ‘t Aepjen",
      "Gollem",
      "Delirium",
      "Craft’n Draft",
      "In de Wildeman",
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
    results: [],
    theme: "light",
    isPlaying: false,
    guessOption: "animal",
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
    updateResults(state, payload) {
      state.results.push(payload);
    },
    toggleTheme(state, payload) {
      state.theme = payload;
    },
    updatePlaying(state, payload) {
      state.isPlaying = payload;
    },
    toggleGuessOption(state, payload) {
      state.guessOption = payload;
    },
    initialiseStore(state) {
      // Persist theme.
      if (localStorage.getItem("theme")) {
        state.theme = localStorage.theme;
        if (state.theme === "dark") {
          document.querySelector("body").classList.add("dark");
        } else {
          document.querySelector("body").classList.remove("dark");
        }
      }
      // Persist word.
      if (localStorage.getItem("setMysteryWord")) {
        state.mysteryWord = localStorage.setMysteryWord;
      }
      // Persist stage.
      if (localStorage.getItem("setStage")) {
        state.stage = localStorage.setStage;
      }
      // Persist start game.
      if (localStorage.getItem("startGame")) {
        state.game = localStorage.startGame;
      }
      // Persist attempts.
      if (localStorage.getItem("attempts")) {
        state.attempts = localStorage.attempts;
      }
      // Persist guessed letters.
      if (localStorage.getItem("guessed")) {
        state.guess = localStorage.guessed;
      }
      // Persist length of word.
      if (localStorage.getItem("length")) {
        state.wordLength = localStorage.length;
      }
      // Persist alphabet letters used.
      if (localStorage.getItem("alphabetOptions")) {
        state.alphabetOptions = JSON.parse(localStorage["alphabetOptions"]);
      }
      // Persist results generated.
      if (localStorage.getItem("updateResults")) {
        state.results = JSON.parse(localStorage["updateResults"]);
      }
      // Persist theme.
      if (localStorage.getItem("guessOption")) {
        state.guessOption = localStorage.guessOption;
      }
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
      localStorage.setItem("setMysteryWord", animal);
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
      // This ensures that the loading state has updated to display before saving.
      setTimeout(() => {
        let stringifyAlphabet = JSON.stringify(this.state.alphabetOptions);
        localStorage.setItem("alphabetOptions", stringifyAlphabet);
      }, 250);
      // Add guessed letter to array.
      if (this.state.mysteryWord.includes(choice)) {
        this.state.guess.push(choice);
        localStorage.setItem("guessed", this.state.guess);
        let count = this.state.mysteryWord.split(choice).length - 1;
        let reduced = this.state.wordLength - count;
        commit("reduceWordLength", reduced);
        localStorage.setItem("length", reduced);
      } else {
        this.state.incorrectChoice.push(choice);
        commit("reduceAttempt");
        localStorage.setItem("attempts", this.state.attempts);
      }
      commit("setButtonSelected", true);
      // Update game status to "stop".
      if (this.state.attempts === 0) {
        let option = this.state.status[2];
        commit("setStage", option);
        localStorage.setItem("setStage", option);
      }
      // If mobile view, scroll up.
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 500);
      }
    },
    async startGame({ commit }) {
      commit("startGame", true);
      localStorage.setItem("startGame", true);
      // Update game status to "play".
      let option = this.state.status[1];
      commit("setStage", option);
      localStorage.setItem("setStage", option);
      // If mobile view, scroll up.
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 500);
      }
    },
    async replayGame({ commit }) {
      commit("setAttempts", 7);
      localStorage.setItem("attempts", 7);
      commit("setGuess", []);
      localStorage.setItem("guessed", []);
      commit("setIncorrectChoice", []);
      localStorage.setItem("incorrectChoice", []);
      // Update game status to "start".
      let option = this.state.status[0];
      commit("setStage", option);
      localStorage.setItem("setStage", option);
      // Reset letter booleans.
      Object.values(this.state.alphabetOptions).forEach(
        (alphabetOptions) => (
          (alphabetOptions.status = ""), (alphabetOptions.chosen = false)
        )
      );
      let stringifyAlphabet = JSON.stringify(this.state.alphabetOptions);
      localStorage.setItem("alphabetOptions", stringifyAlphabet);
      // Reset to false for next game.
      commit("setButtonSelected", false);
      setTimeout(() => {
        // Draw the user's attention to the lives count.
        document.getElementByClassName("count").scrollIntoView();
      }, 500);
    },
    async saveResults({ commit }) {
      commit("updateResults", [this.state.mysteryWord, this.state.attempts]);
      let stringifyResults = JSON.stringify(this.state.results);
      localStorage.setItem("updateResults", stringifyResults);
    },
    async updateTheme({ commit }) {
      if (this.state.theme === "light") {
        commit("toggleTheme", "dark");
        document.querySelector("body").classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        commit("toggleTheme", "light");
        document.querySelector("body").classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    },
    async toggleSoundtrack({ commit }, status) {
      commit("updatePlaying", status);
    },
    async updateGuessOption({ commit }) {
      if (this.state.guessOption === "animal") {
        commit("toggleGuessOption", "beer");
        localStorage.setItem("guessOption", "beer");
      } else {
        commit("toggleGuessOption", "animal");
        localStorage.setItem("guessOption", "animal");
      }
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
    getResults: (state) => state.results,
    getTheme: (state) => state.theme,
    getSoundtrack: (state) => state.isPlaying,
    getGuessOption: (state) => state.guessOption,
  },
});

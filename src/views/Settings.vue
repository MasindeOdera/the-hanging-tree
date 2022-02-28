<template>
  <div class="settings">
    <ul :class="['menu', { dark: theme === 'dark' }]">
      <li class="divider" data-content="Configuration"></li>
      <li class="menu-item topic">
        <a href="#">Current guess topic <i class="icon icon-downward"></i></a>
      </li>
      <li class="menu-item">
        <div>
          <label class="form-switch">
            <input type="checkbox" /><i
              :class="['form-icon', guess === 'animal' ? 'dark' : 'light']"
              @click="toggleGuessOption"
            ></i>
          </label>
        </div>
        <div>
          Use Craft Beer & Microbreweries from
          <a href="https://lostinfermentation.com/craft-beer-amsterdam/"
            >Lost In Fermentation</a
          >
        </div>
        <div class="menu-badge">
          <label class="label label-primary">{{ guess }}</label>
        </div>
      </li>
      <li class="menu-item">
        <div>
          <label class="form-switch">
            <input type="checkbox" /><i
              :class="['form-icon', theme === 'dark' ? 'dark' : 'light']"
              @click="toggleTheme"
            ></i>
          </label>
        </div>
        <div>Display Mode</div>
        <div class="menu-badge">
          <label class="label label-primary">{{ theme }}</label>
        </div>
      </li>
      <li class="menu-item">
        <div>
          <label class="form-switch">
            <input type="checkbox" /><i
              :class="['form-icon', music === true ? 'dark' : 'light']"
              @click="toggleMusic"
            ></i>
          </label>
        </div>
        <div>Theme Song</div>
        <div class="menu-badge">
          <label class="label label-primary">{{
            music === true ? "On" : "Off"
          }}</label>
        </div>
      </li>
      <li class="divider"></li>
      <li class="menu-item">
        <a href="#"> <i class="icon icon-link"></i> options </a>
        <div class="menu-badge">
          <label class="label label-primary">2</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Settings",
  methods: {
    ...mapActions(["updateTheme", "toggleSoundtrack", "updateGuessOption"]),
    toggleTheme() {
      this.updateTheme();
    },
    toggleMusic() {
      // Toggle state of music.
      this.music === true
        ? this.toggleSoundtrack(false)
        : this.toggleSoundtrack(true);
    },
    toggleGuessOption() {
      this.updateGuessOption();
    },
  },
  computed: {
    ...mapGetters({
      theme: "getTheme",
      music: "getSoundtrack",
      guess: "getGuessOption",
    }),
  },
};
</script>

<style lang="scss" scoped>
.settings {
  margin: 3rem auto;
  width: 70%;
  cursor: default;
  .menu.dark {
    background: #d9d9d9;
    .divider {
      border-top: 0.05rem solid #132639 !important;
    }
    .divider[data-content]::after {
      background: #d9d9d9 !important;
      color: #132639 !important;
    }
    .menu-item {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      padding: unset;
      &.topic {
        grid-template-columns: 4fr;
        justify-items: end;
      }
      .form-switch .form-icon.light {
        background: #008b8b !important;
      }
      a {
        color: #008b8b !important;
      }
      .menu-badge {
        height: auto;
        .label {
          margin-right: unset;
        }
        .label.label-primary {
          background: #008b8b !important;
        }
      }
    }
  }
  .menu {
    .divider {
      border-top: 0.05rem solid #bcc3ce !important;
    }
    .menu-item {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      padding: unset;
      &.topic {
        grid-template-columns: 4fr;
        justify-items: end;
      }
      .form-checkbox input:checked + .form-icon.light-fill {
        background: #42b983 !important;
        border-color: #42b983 !important;
      }
      .form-checkbox input:checked + .form-icon.dark-fill {
        background: #132639 !important;
        border-color: #132639 !important;
      }
      .form-icon.dark::before {
        left: 14px !important;
      }
      .form-icon.light::before {
        left: 0px !important;
      }
      .form-switch input:checked + .form-icon.dark,
      .form-switch .form-icon.dark {
        background: #132639 !important;
        border-color: #132639 !important;
      }
      .form-switch .form-icon.light {
        background: #42b983 !important;
      }
      a {
        color: #42b983 !important;
        font-weight: bold;
      }
      .menu-badge {
        height: auto;
        .label {
          margin-right: unset;
        }
        .label.label-primary {
          background: #42b983;
        }
      }
    }
  }
}
</style>

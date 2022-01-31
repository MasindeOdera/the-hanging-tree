<template>
  <div class="settings">
    <ul class="menu">
      <li class="divider" data-content="Configuration"></li>
      <li class="menu-item">
        <a href="#"> <i class="icon icon-downward"></i> Coming soon </a>
      </li>
      <li class="menu-item">
        <label class="form-checkbox">
          <input type="checkbox" />
          <i
            :class="[
              'form-icon',
              theme === 'dark' ? 'dark-fill' : 'light-fill',
            ]"
          ></i>
          Use beer names from
          <a href="https://www.beerwulf.com/">Beerwulf.com</a>
        </label>
      </li>
      <li class="menu-item">
        <label class="form-switch">
          <input type="checkbox" v-model="checked" /><i
            :class="['form-icon', theme === 'dark' ? 'dark' : 'light']"
            @click="toggleTheme"
          ></i>
          Toggle light/dark mode
        </label>
        <div class="menu-badge">
          <label class="label label-primary">{{ theme }}</label>
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
    ...mapActions(["updateTheme"]),
    toggleTheme() {
      this.updateTheme();
    },
  },
  computed: {
    ...mapGetters({
      theme: "getTheme",
    }),
  },
};
</script>

<style lang="scss" scoped>
.settings {
  margin: 3rem auto;
  width: 70%;
  .menu {
    .menu-item {
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
        .label.label-primary {
          background: #42b983;
        }
      }
    }
  }
}
</style>

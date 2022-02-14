<template>
  <div class="navigation">
    <ul>
      <li class="list" :class="{ active: this.$route.name === 'Home' }">
        <router-link to="/the-hanging-tree/">
          <span class="unknown" v-show="this.$route.name === 'PageNotFound'">
            <ion-icon name="warning-sharp"> </ion-icon>
          </span>
          <span
            class="icon"
            :class="{ space: this.$route.name === 'PageNotFound' }"
          >
            <ion-icon name="home-sharp"> </ion-icon
          ></span>
          <span class="text">Home</span></router-link
        >
      </li>
      <li class="list" :class="{ active: this.$route.name === 'About' }">
        <router-link to="/the-hanging-tree/about">
          <span class="icon">
            <ion-icon name="information-circle-sharp"></ion-icon
          ></span>
          <span class="text">About</span></router-link
        >
      </li>
      <li class="list" :class="{ active: this.$route.name === 'Results' }">
        <router-link to="/the-hanging-tree/results">
          <span class="icon">
            <ion-icon name="bar-chart-sharp"></ion-icon>
          </span>
          <span class="text">Results</span></router-link
        >
      </li>
      <li class="list" :class="{ active: this.$route.name === 'Settings' }">
        <router-link to="/the-hanging-tree/settings">
          <span class="icon">
            <ion-icon name="settings-sharp"></ion-icon>
          </span>
          <span class="text">Settings</span></router-link
        >
      </li>
      <li class="list" :class="{ active: this.$route.name === 'Extra' }">
        <router-link to="/the-hanging-tree/extra" data-test-id="extra">
          <span class="icon">
            <ion-icon name="beer-sharp"></ion-icon>
          </span>
          <span class="text">Extra</span></router-link
        >
      </li>
      <div :class="['indicator', { dark: theme === 'dark' }]"></div>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Navigation",
  methods: {
    ...mapActions(["updateTheme"]),
  },
  computed: {
    ...mapGetters({
      theme: "getTheme",
    }),
  },
};
</script>

<style lang="scss">
.dark {
  .navigation {
    background: #d9d9d9 !important;
    ul {
      li a {
        .text {
          color: #008b8b !important;
        }
      }
      .indicator {
        background: #008b8b !important;
      }
    }
  }
}
.navigation {
  width: 400px;
  height: 70px;
  background: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 40px auto;

  ul {
    display: flex;
    width: 350px;

    li {
      position: relative;
      list-style: none;
      width: 70px;
      height: 70px;
      z-index: 1;

      a {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        text-align: center;
        font-weight: 500;
        outline: none !important;

        &.router-link-exact-active {
          color: #42b983;
        }

        .unknown {
          position: relative;
          display: block;
          height: initial;
          text-indent: unset;
          line-height: initial !important;
          font-size: 1em;
          text-align: center;
          transition: 0.5s;
          color: #000;
          width: initial;
          transform: translateY(-20px);

          ion-icon.md.hydrated {
            width: 1.6em;
            height: 1.6em;
          }
        }

        .icon {
          position: relative;
          display: block;
          height: initial;
          text-indent: unset;
          line-height: 80px;
          font-size: 1em;
          text-align: center;
          transition: 0.5s;
          color: #000;
          width: initial;

          ion-icon.md.hydrated {
            width: 1.6em;
            height: 1.6em;
          }
        }

        .space {
          transform: translateY(-20px);
        }

        .text {
          position: absolute;
          color: #00bfa6;
          font-weight: bold;
          font-size: 1em;
          letter-spacing: 0.05em;
          transition: 0.5s;
          opacity: 0;
          transform: translateY(20px);
        }
        .text .darker {
          color: #008b8b !important;
          background-color: #d9d9d9 !important;
        }
      }

      a:hover,
      a:active,
      a:focus {
        box-shadow: none;
      }
    }

    li.active {
      a .icon {
        transform: translateY(-35px);
      }

      a .text {
        opacity: 1;
        transform: translateY(10px);
      }
    }

    li:nth-child(1).active ~ .indicator {
      transform: translateX(calc(70px * 0));
    }

    li:nth-child(2).active ~ .indicator {
      transform: translateX(calc(70px * 1));
    }

    li:nth-child(3).active ~ .indicator {
      transform: translateX(calc(70px * 2));
    }

    li:nth-child(4).active ~ .indicator {
      transform: translateX(calc(70px * 3));
    }

    li:nth-child(5).active ~ .indicator {
      transform: translateX(calc(70px * 4));
    }

    .indicator {
      position: absolute;
      top: -50%;
      width: 70px;
      height: 70px;
      background: #00bfa6;
      border-radius: 50%;
      border: 6px solid #ccf2ff;
      transition: 0.5s;
    }

    .indicator.dark {
      border: 6px solid #132639;
    }

    .indicator:before {
      content: "";
      position: absolute;
      top: 50%;
      left: -22px;
      width: 20px;
      height: 20px;
      background: transparent;
      border-top-right-radius: 20px;
      box-shadow: 1px -10px 0 0 #ccf2ff;
    }

    .indicator.dark:before {
      box-shadow: 1px -10px 0 0 #132639;
    }

    .indicator:after {
      content: "";
      position: absolute;
      top: 50%;
      right: -22px;
      width: 20px;
      height: 20px;
      background: transparent;
      border-top-left-radius: 20px;
      box-shadow: -1px -10px 0 0 #ccf2ff;
    }

    .indicator.dark:after {
      box-shadow: -1px -10px 0 0 #132639;
    }
  }
}

@media only screen and (max-width: 414px) {
  .navigation {
    width: 340px;
  }
}
</style>

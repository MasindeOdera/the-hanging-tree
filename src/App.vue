<template>
  <div id="app">
    <div class="navigation">
      <ul>
        <li class="list" :class="{ active: this.$route.name === 'Home' }">
          <router-link to="/the-hanging-tree/">
            <span class="icon"> <ion-icon name="home-sharp"> </ion-icon></span>
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
        <div class="indicator"></div>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));
</script>

<style lang="scss">
body {
  background-color: #ccf2ff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

        .icon {
          position: relative;
          display: block;
          height: initial;
          line-height: 60px;
          text-indent: unset;
          line-height: 75px;
          font-size: 1em;
          text-align: center;
          transition: 0.5s;
          color: #000;
        }

        .text {
          position: absolute;
          color: #00bfa6;
          font-weight: bold;
          font-size: 0.75em;
          letter-spacing: 0.05em;
          transition: 0.5s;
          opacity: 0;
          transform: translateY(20px);
        }
      }

      a:hover,
      a:active,
      a:focus {
        color: transparent !important;
        outline: none !important;
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

      a:hover,
      a:active,
      a:focus {
        color: transparent !important;
        outline: none !important;
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
  }
}
</style>

<template>
  <div class="about">
    <div class="column col-xs-12">
      <div class="panel menu">
        <div class="panel-header text-center">
          <figure class="avatar avatar-lg">
            <img src="../assets/profile.png" alt="Avatar" />
          </figure>
          <div class="panel-title h4 mt-10">Masinde Odera</div>
          <div class="panel-subtitle">The Hanging Tree</div>
        </div>
        <li class="divider" data-content="Setup"></li>
        <div class="panel-body">
          <div class="tile tile-centered">
            <div class="tile-content">
              <div class="tile-title text-bold">JS Framework</div>
              <div class="tile-subtitle">
                <a href="https://vuejs.org/" target="_blank">Vue.js</a>
              </div>
            </div>
          </div>
          <div class="tile tile-centered">
            <div class="tile-content">
              <div class="tile-title text-bold">CSS Framework</div>
              <div class="tile-subtitle">
                <a
                  href="https://picturepan2.github.io/spectre/index.html"
                  target="_blank"
                  >Spectre</a
                >
              </div>
            </div>
          </div>
          <div class="tile tile-centered">
            <div class="tile-content">
              <div class="tile-title text-bold">Unit Tests</div>
              <div class="tile-subtitle">
                <a href="https://jestjs.io/" target="_blank">Jest</a>
              </div>
            </div>
          </div>
          <div class="tile tile-centered">
            <div class="tile-content">
              <div class="tile-title text-bold">End-to-End Test</div>
              <div class="tile-subtitle">
                <a href="https://www.cypress.io/" target="_blank">Cypress</a>
              </div>
            </div>
          </div>
          <div class="tile tile-centered">
            <div class="tile-content">
              <div class="tile-title text-bold">Assets</div>
              <div class="tile-subtitle">
                Tree from
                <a href="https://undraw.co/illustrations" target="_blank"
                  >undraw</a
                >
              </div>
              <div class="tile-subtitle">
                Icons from
                <a href="https://ionic.io/ionicons" target="_blank">ionicons</a>
              </div>
              <div class="tile-subtitle">
                Music from
                <a
                  href="https://mp3download.to/10en/RpMdNrkTB3E.html"
                  target="_blank"
                  >MP3Download.to</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss">
.dark {
  .about {
    .column {
      .menu {
        background: #d9d9d9 !important;
        .divider {
          border-top: 0.05rem solid #132639 !important;
        }
        .divider[data-content]::after {
          background: #d9d9d9 !important;
          color: #132639 !important;
        }
        a {
          color: #008b8b !important;
        }
      }
    }
  }
}
.about {
  cursor: default;
  .column {
    margin: 3rem auto;
    width: 70%;
    .menu {
      .divider {
        border-top: 0.05rem solid #bcc3ce !important;
      }
      a {
        color: #42b983 !important;
        font-weight: bold;
      }
    }
  }
}
@media (max-width: 480px) {
  .about {
    .column {
      margin: 2rem auto;
      width: 80%;
    }
  }
}
</style>

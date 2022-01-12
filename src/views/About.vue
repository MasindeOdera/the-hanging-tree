<template>
  <div class="about">
    <div class="column col-xs-12">
      <div class="panel">
        <div class="panel-header text-center">
          <figure class="avatar avatar-lg">
            <img src="../assets/profile.png" alt="Avatar" />
          </figure>
          <div class="panel-title h4 mt-10">Masinde Odera</div>
          <div class="panel-subtitle">The Hanging Tree</div>
        </div>
        <nav class="panel-nav">
          <ul class="tab tab-block">
            <li class="tab-item active">Setup</li>
          </ul>
        </nav>
        <div class="panel-body">
          <div class="tile tile-centered">
            <div class="tile-content">
              <div class="tile-title text-bold">JS Framework</div>
              <div class="tile-subtitle">Vue.js</div>
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
              <div class="tile-subtitle">Jest</div>
            </div>
          </div>
          <div class="tile tile-centered">
            <div class="tile-content">
              <div class="tile-title text-bold">End-to-End Test</div>
              <div class="tile-subtitle">Cypress</div>
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
.about {
  .column {
    margin: 3rem auto;
    width: 70%;
    .panel {
      border-color: #42b983 !important;
      .tab {
        border-color: #42b983 !important;
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

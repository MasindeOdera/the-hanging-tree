<template>
  <div class="extra">
    <h4>Fancy Placeholder</h4>
    <div class="docs-demo columns">
      <div class="column col-12">
        <div class="viewer-360">
          <input
            class="viewer-slider slider"
            type="range"
            min="1"
            max="36"
            value="36"
            oninput="this.setAttribute('value', this.value);"
          />
          <figure
            class="viewer-image skeleton"
            style="
              background-image: url('https://i.loli.net/2018/11/25/5bfa45b4b3f27.jpg');
              padding-bottom: 37.5%;
              width: 100%;
            "
          ></figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Extra",
};
</script>

<style lang="scss" scoped>
.extra {
  margin: 3rem;
  cursor: default;
  .viewer-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 100%;
    margin-right: 1rem;
    flex-shrink: 0;
  }
  .skeleton {
    opacity: 0.8;
    animation: skeleton-loading 0.5s linear infinite alternate;
  }

  .skeleton-text {
    width: 100%;
    height: 0.5rem;
    margin-bottom: 0.25rem;
    border-radius: 0.125rem;
  }

  .skeleton-text:last-child {
    margin-bottom: 0;
    width: 80%;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 66%, 88%);
    }

    100% {
      background-color: hsl(200, 2%, 72%);
    }
  }
}
.dark .extra {
  color: #008b8b;
}
</style>

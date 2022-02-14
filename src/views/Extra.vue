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
            class="viewer-image"
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
}
.dark .extra {
  color: #008b8b;
}
</style>

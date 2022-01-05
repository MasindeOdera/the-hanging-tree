<template>
  <div class="extra">
    <h2>Details</h2>
    <div class="tile">
      <div class="tile-icon">
        <div class="example-tile-icon">
          <i class="icon icon-file centered"></i>
        </div>
      </div>
      <div class="tile-content">
        <p class="tile-title">The Avengers</p>
        <p class="tile-subtitle">
          Earth's Mightiest Heroes joined forces to take on threats that were
          too big for any one hero to tackle...
        </p>
      </div>
      <div class="tile-action">
        <button class="btn btn-primary">Join</button>
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
</style>

<template>
  <div class="settings">
    <ul class="menu">
      <!-- menu header text -->
      <li class="divider" data-content="Configuration"></li>
      <!-- menu item standard -->
      <li class="menu-item">
        <a href="#"> <i class="icon icon-link"></i> Coming soon </a>
      </li>
      <!-- menu item with form control -->
      <li class="menu-item">
        <label class="form-checkbox">
          <input type="checkbox" />
          <i class="form-icon"></i> custom checkbox
        </label>
      </li>
      <li class="menu-item">
        <label class="form-switch">
          <input type="checkbox" checked="" /><i class="form-icon"></i> custom
          toggle
        </label>
      </li>
      <!-- menu divider -->
      <li class="divider"></li>
      <!-- menu item with badge -->
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
export default {
  name: "Settings",
};
</script>

<style lang="scss" scoped>
.settings {
  margin: 3rem;
  max-width: 800px;
}
</style>

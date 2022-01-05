<template>
  <div class="settings">
    <ul class="menu">
      <!-- menu header text -->
      <li class="divider" data-content="LINKS"></li>
      <!-- menu item standard -->
      <li class="menu-item">
        <a href="#"> <i class="icon icon-link"></i> Slack </a>
      </li>
      <!-- menu item with form control -->
      <li class="menu-item">
        <label class="form-checkbox">
          <input type="checkbox" />
          <i class="form-icon"></i> form-checkbox
        </label>
      </li>
      <!-- menu divider -->
      <li class="divider"></li>
      <!-- menu item with badge -->
      <li class="menu-item">
        <a href="#"> <i class="icon icon-link"></i> Settings </a>
        <div class="menu-badge">
          <label class="label label-primary">2</label>
        </div>
      </li>

      <li class="menu-item">
        <a href="#">My profile</a>
        <div class="menu-badge">
          <label class="form-checkbox">
            <input type="checkbox" />
            <i class="form-icon"></i> Public
          </label>
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
}
</style>

<template>
  <div class="greeting">
    <h4>{{ greeting }}</h4>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  props: {
    greeting: String,
  },
};
</script>

<style lang="scss" scoped>
.greeting {
  color: crimson;
}
</style>

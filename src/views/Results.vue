<template>
  <div class="results">
    <h2>Hangman Results</h2>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Game Number</th>
          <th>Word</th>
          <th>Number of Guesses</th>
        </tr>
      </thead>
      <tbody>
        <tr class="active">
          <td>#1</td>
          <td>Animal</td>
          <td>5</td>
        </tr>
        <tr class="">
          <td>#2</td>
          <td>Animal</td>
          <td>3</td>
        </tr>
        <tr class="">
          <td>#3</td>
          <td>Animal</td>
          <td>2</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Results",
};
</script>

<style lang="scss" scoped>
.results {
  margin: 3rem;
}
</style>

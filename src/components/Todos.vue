<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.label }} <a href="#" v-on:click="onRemove">&times;</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: `Todos`,
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  // display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

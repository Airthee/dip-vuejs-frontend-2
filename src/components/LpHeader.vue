<template>
  <h1>Il y a {{ count }} todos</h1>
</template>

<script>
export default {
  name: `LpHeader`,
  computed: {
    count() {
      return this.$store.getters.count;
    },
  },
};
</script>

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <lp-header/>
    <router-view/>
  </div>
</template>

<script>
import lpHeader from '@/components/LpHeader';

export default {
  name: `App`,
  created() {
    this.$store.dispatch(`getTodos`);
  },
  components: {
    lpHeader,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

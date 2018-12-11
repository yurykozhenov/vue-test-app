<template>
<div>
  <router-link to="/">
    <a>Stock Data</a>
  </router-link>

  <form>
    <label for="symbol">Symbol</label>
    <input id="symbol" v-model="symbol" v-bind:change="saveSymbol()">
  </form>
</div>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return { symbol: '' };
  },
  methods: {
    saveSymbol() {
      localStorage.setItem('symbol', this.$data.symbol);
    },
  },
  created() {
    this.symbol = localStorage.getItem('symbol') || '';
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

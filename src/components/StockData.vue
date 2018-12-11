<template>
<div>
  <router-link to="/settings">
    <a>Settings</a>
  </router-link>

  <div>Current symbol: {{symbol || 'None'}}</div>

  <ul>
    <li>Price: <span class="num">{{data.latestPrice}}</span></li>
    <li>Price change:
      <span class="num"
            v-bind:style="{ color: data.change < 0 ? 'red': 'green' }">
        {{data.change}}
      </span>
    </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'StockData',
  data() {
    return { data: {}, symbol: '' };
  },
  async created() {
    this.symbol = localStorage.getItem('symbol') || '';
    const response = await axios.get(`https://api.iextrading.com/1.0/stock/${this.symbol}/quote`);
    console.log(response);
    this.data = response.data;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table {
    border-collapse: collapse;
  }

  tr, td, th {
    border: 1px solid black;
  }

  .num {
    font-weight: bold;
  }
</style>

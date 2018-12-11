import Vue from 'vue';
import Router from 'vue-router';
import StockData from '@/components/StockData';
import Settings from '@/components/Settings';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Stock Data',
      component: StockData,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
    },
  ],
});

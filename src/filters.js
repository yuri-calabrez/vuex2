import Vue from 'vue';

Vue.filter('saldo', time => time.gm - time.gs);
Vue.filter('ucWords', value => value.charAt(0).toUpperCase() + value.slice(1));
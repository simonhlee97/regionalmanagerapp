import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

window.axios = require('axios');

import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import OrganizationChart from 'primevue/organizationchart';

Vue.component('InputText', InputText);
Vue.component('Button', Button);
Vue.component('TabPanel', TabPanel);
Vue.component('TabView', TabView);
Vue.component('OrgChart', OrganizationChart)

import 'primevue/resources/themes/nova-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

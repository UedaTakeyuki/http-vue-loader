import Vue from 'vue'
//import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

/*
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
*/

Vue.use(vuetify)

import httpVueLoader from "httpVueLoader";

new Vue({
  el: "#app",
  components: {
    App: httpVueLoader("./App.vue")
  }
});
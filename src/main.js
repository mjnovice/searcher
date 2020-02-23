import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.config.productionTip = false

Vue.filter('formatDate', function (value) {
  if (!value) return ''
  var date = moment.unix(value)
  if (!date.isValid()) return ''
  return moment(date).fromNow();
})

new Vue({
  render: h => h(App),
}).$mount('#app')

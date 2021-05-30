import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'

Vue.config.productionTip = false

Vue.component('v-calendar', Calendar)
Vue.component('v-date-picker', DatePicker)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

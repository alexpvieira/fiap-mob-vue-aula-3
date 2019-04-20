import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios= axios

// Vue.prototype.$axios = axios.create({ 
// 	baseURL: 'https://jsonplaceholder.typicode.com/', 
// 	timeout: 1000, 
// 	headers: {'X-Custom-Header': 'foobar'} 
// })

// axios.interceptors.request.use((config) => {
// 	console.log('using interceptors for the request')
// 	return config
// }, 
// (error) => {
// 	return Promise.reject(error)
// })

// axios.interceptors.response.use((response) => {
// 	console.log('using interceptors for the respose')
//     return response
// }, 
// (error) => {
//     return Promise.reject(error)
// })

new Vue({
  render: h => h(App),
}).$mount('#app')

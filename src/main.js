import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebase from 'firebase/app'
import 'firebase/database'

var config = {
  apiKey: "AIzaSyBp841O80vZLEesNpzAlWE5A75A0RMnNWA",
  authDomain: "photoapp-d06de.firebaseapp.com",
  databaseURL: "https://photoapp-d06de.firebaseio.com",
  projectId: "photoapp-d06de",
  storageBucket: "photoapp-d06de.appspot.com",
  messagingSenderId: "626847436809"
};

firebase.initializeApp(config)
Vue.prototype.db = firebase.database()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
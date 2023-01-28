import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';


// import { configureCompat } from 'vue';

// Migration: vue 2 to vue 3
// configureCompat({
//     MODE: 3,
// })

// Vue.use(BootstrapVue).use(BootstrapVueIcons)

// new Vue({
//     router,
//     store,
//     render: (h: any) => h(App),
// }).$mount('#app')

createApp(App)
.use(store)
.use(router)
.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
/**
 * Font Awesome CSS
 */
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
/**
 * Bootstrap Css
 */
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import store from './vuex/store';
// import '../node_modules/bootstrap/dist/js/bootstrap.js';

const app=createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
//createApp(App).use(router).mount('#app')

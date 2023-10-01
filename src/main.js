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
// import '../node_modules/bootstrap/dist/js/bootstrap.js';
createApp(App).use(router).mount('#app')

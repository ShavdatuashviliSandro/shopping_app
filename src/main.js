import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SlideUpDown from 'vue3-slide-up-down'


createApp(App).use(router).component('slide-up-down',SlideUpDown).mount('#app')

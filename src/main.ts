import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';
import i18n from './i18n';

const app = createApp(App).use(router).use(i18n)

// Install Pinia
app.use(createPinia())

app.mount('#app')

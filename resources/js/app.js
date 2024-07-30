import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import routes from './route'

import App from './views/App.vue'

createApp(App)
    .use(routes)
    .mount("#app")

import { createApp } from 'vue'
import App from './App'
import router from './router'
// import store from '@/store/store'
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full.css'

const app = createApp(App).use(router)

app.use(Oruga)
app.mount('#app')


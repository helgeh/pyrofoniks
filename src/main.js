
import { registerPlugins } from '@/plugins'

import App from './App.vue'

import { createApp } from 'vue'

tsParticles.load({ id: "tsparticles", options: { preset: "fire" } });

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

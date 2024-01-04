import { createSSRApp } from 'vue'
import App from './App.vue'
import './style/index.scss'
import './style/font.scss'

import pinia from './store'
import router from './router'
import uviewPlus from 'uview-plus'

import './permission'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  app.use(pinia)
  app.use(router)
  // @ts-ignore
  uni.$u.setConfig({
    props: {
      navbar: {
        bgColor: '#03aa8c',
        titleStyle: { color: '#fff' }
      }
    }
  })
  return {
    app
  }
}

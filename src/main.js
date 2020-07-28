import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import EleForm from 'vue-ele-form'
import App from './App.vue'
import { FormSchema, FormField } from '@ckangwen/components'
import '@ckangwen/components/lib/styles/index.css'

import store from './store'

Vue.use(EleForm, {
  upload: {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    responseFn (response) {
      // 因为是 mock 地址, 所以, 总是返回同一张图片的URL, 正常使用的时候不会
      return response.url
    }
  },
  'upload-file': {
    responseFn (response, file) {
      return {
        name: file.name,
        url: URL.createObjectURL(file.raw),
        size: file.size
      }
    }
  }
})

Vue.use(ElementUI)
Vue.use(FormSchema)
Vue.use(FormField)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

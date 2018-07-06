import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Editor from '@/components/Editor'

import { Icon } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueQuillEditor from 'vue-quill-editor'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(Icon)
Vue.use(VueQuillEditor, /* { default global options } */)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/e',
      name: 'Editor',
      component: Editor
    }
  ]
})

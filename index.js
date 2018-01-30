import VueJSX from 'babel-plugin-transform-vue-jsx'
import JsxEventModifiers from 'babel-plugin-jsx-event-modifiers'
import JsxVModel from 'babel-plugin-jsx-v-model'

export default () => ({
  plugins: [
    JsxEventModifiers,
    JsxVModel,
    VueJSX
  ]
})

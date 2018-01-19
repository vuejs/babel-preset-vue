import VueJSX from 'babel-plugin-transform-vue-jsx'
import JsxEventModifiers from 'babel-plugin-jsx-event-modifiers'
import JsxVModel from 'babel-plugin-jsx-v-model'
import JsxSyncModifier from 'babel-plugin-vue-jsx-sync'

export default {
  plugins: [
    JsxEventModifiers,
    JsxSyncModifier,
    JsxVModel,
    VueJSX
  ]
}

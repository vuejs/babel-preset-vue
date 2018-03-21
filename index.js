import jsxPlugin from 'babel-plugin-transform-vue-jsx'
import eventModifiersPlugin from 'babel-plugin-jsx-event-modifiers'
import vModelPlugin from 'babel-plugin-jsx-v-model'

export default (_, { eventModifiers = true, vModel = true } = {}) => ({
  plugins: [
    eventModifiers && eventModifiersPlugin,
    vModel && vModelPlugin,
    jsxPlugin
  ].filter(Boolean)
})

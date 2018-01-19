# babel-preset-vue

Babel preset for all Vue plugins.

## Install

```bash
npm install -D babel-preset-vue
```

CDN: [UNPKG](https://unpkg.com/babel-preset-vue/)

## Usage

```js
{
  "presets": ["vue"]
}
```

#### Supports event modifiers.

Uses `babel-plugin-jsx-event-modifier` for event modifiers.

Example:
```js
Vue.component('hello-world', {
  methods: {
    method () {
      console.log('clicked')
    }
  },
  render () {
    return (
      <div>
        <a href="/" onClick:prevent={this.method} />
      </div>
    )
  }
})
```

More information available on [plugin's github page](https://github.com/nickmessing/babel-plugin-jsx-event-modifiers).

#### Supports v-model.

Uses `babel-plugin-jsx-v-model` for two-way data binding with form elements.

Example:
```js
Vue.component('hello-world', {
  data: () => ({
    text: 'Hello World!'
  }),
  render () {
    return (
      <div>
        <input type="text" v-model={this.text} />
        {this.text}
      </div>
    )
  }
})
```

More information available on [plugin's github page](https://github.com/nickmessing/babel-plugin-jsx-v-model).

### Supports sync modifier

Uses [babel-plugin-vue-jsx-sync](https://github.com/njleonzhang/babel-plugin-vue-jsx-sync) for supporting sync modifier.

Example:
```js
function a() {
  return (
    <div>
      <component visible$sync={ this.test }>I am newbie</component>
    </div>
  )
}
```
is complied to:

```js
function a() {
  return h(
    "div",
    null,
    [h(
      "component",
      {
        attrs: { visible: this.test },
        on: {
          "update:visible": $$val => {
            this.test = $$val;
          }
        }
      },
      ["I am newbie"]
    )]
  );
}
```

More information available on [plugin's github page](https://github.com/njleonzhang/babel-plugin-vue-jsx-sync).

## License

MIT &copy; [EGOIST](https://github.com/egoist)

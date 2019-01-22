# emoji-vue

😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋

A Vue.js project implementing a input field addon allowing to add emojis via dropdown.


![dependencies status](https://david-dm.org/shershen08/emoji-vue/status.svg)

## Install ⚙️
```
npm i emoji-vue --save
```

![emoji-vue preview image](https://i.imgur.com/KMo0Pgv.png)


## Use 😎👌🏻


```
import VueEmoji from 'emoji-vue'


//in component def
  methods: {
      onInput(event) {
          //event.data contains the value of the textarea
      },
      clearTextarea(){
        this.$refs.emoji.clear()
      },  
  },
  components: {
    VueEmoji
  }

//in template section
<VueEmoji ref="emoji" @input="onInput" :value="myText" />
```

## Event & properties 📕 📗 📘 📙

**@input** - event generated when content of textarea with emoji selector is changed.

**value**  - property to place initial content of the textarea.

**width** - sets width of visible textarea in px; defaults to '200px'.

**height** - sets height of visible textarea in px; defaults to '50px'.


## Build Setup 🧠 ❤️ ✅

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

Project uses the following setup: [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

Check the [DEMO](https://shershen08.github.io/emoji-vue/)


## About

Based on code from https://github.com/OneSignal/emoji-picker

Create [an issue](https://github.com/shershen08/emoji-vue/issues) or ping me on twitter [@legkoletat](https://twitter.com/legkoletat)


## License

MIT

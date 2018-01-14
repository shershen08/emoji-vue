# emoji-vue

😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋

A Vue.js project implementing a input field addon allowing to add emojis via dropdown.
Based on code from https://github.com/OneSignal/emoji-picker

![emoji-vue preview image](https://i.imgur.com/KMo0Pgv.png)

## Install ⚙️
```
npm i emoji-vue --save
```

## Use 😎👌🏻


```
import VueEmoji from 'emoji-vue'


//in component def
  methods: {
      onInput(event) {
          //event.data contains the value of the textarea
      }
  },
  components: {
    VueEmoji
  }

//in template section
<VueEmoji @input="onInput" :value="myText" />
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

Project uses the follwowing setup: [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

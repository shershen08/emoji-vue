# vue-emoji

A Vue.js project implementing a input field addon allowing to add emojis via dropdown.
Based on code from https://github.com/OneSignal/emoji-picker

## Install
```
npm i vue-emoji --save
```

## Use


```
import VueEmoji from 'vue-emoji'


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
<VueEmoji @input="onInput"/>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

Project uses the follwowing setup: [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

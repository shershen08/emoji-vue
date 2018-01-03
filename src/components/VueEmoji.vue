<template>
  <div class="hello">
  <textarea cols="50" rows="10" data-emojiable="true" v-model="emojiData"></textarea>
   <br>
   {{emojiData}}
  </div>
</template>

<script>

import {jQuery as $} from 'jquery';
window.$ = $;
window.jQuery = jQuery;

import ns from 'nanoscroller/bin/javascripts/jquery.nanoscroller'

import Vue from "vue";
import "./lib/css/emoji.css";
import "font-awesome/css/font-awesome.css";
import "nanoscroller/bin/css/nanoscroller.css";

import storageUtils from "./lib/js/util";
import {emojiareaPlugin} from "./lib/js/jquery.emojiarea";

emojiareaPlugin(window.jQuery, window, document)

import {EmojiPicker} from "./lib/js/emoji-picker";

import * as img1 from './lib/img/IconsetSmiles.png'
import './lib/img/IconsetSmiles_1x.png'
import './lib/img/IconsetW.png'
import './lib/img/IconsetW_1x.png'

export default {
  name: "VueEmoji",
  data() {
    return {
      emojiData: ""
    };
  },
  methods: {
    initEmojiPlugin() {
      window.emojiPicker = new EmojiPicker({
        emojiable_selector: "[data-emojiable=true]",
        assetsPath: "",
        popupButtonClasses: "fa fa-smile-o"
      })
      window.emojiPicker.discover()
    }
  },
  mounted: function() {
    Vue.nextTick(() => {
      storageUtils()
      this.initEmojiPlugin()
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="emoji-vue-wraper">
    <textarea cols="50" rows="10" data-emojiable="true" class="emoji-vue-textarea"></textarea>
  </div>
</template>

<script>

import {jQuery as $} from 'jquery';

import ns from 'nanoscroller/bin/javascripts/jquery.nanoscroller'

import Vue from "vue";
import "./lib/css/emoji.css";
import "font-awesome/css/font-awesome.css";
import "nanoscroller/bin/css/nanoscroller.css";

import storageUtils from "./lib/js/util";
import {emojiareaPlugin} from "./lib/js/jquery.emojiarea";
import {EmojiPicker} from "./lib/js/emoji-picker";

import * as img1 from './lib/img/IconsetSmiles.png'
import './lib/img/IconsetSmiles_1x.png'
import './lib/img/IconsetW.png'
import './lib/img/IconsetW_1x.png'

emojiareaPlugin(jQuery, window, document)

export default {
  name: "VueEmoji",
  methods: {
    initEmojiPlugin() {
      window.emojiPicker = new EmojiPicker({
        emojiable_selector: "[data-emojiable=true]",
        assetsPath: "",
        popupButtonClasses: "fa fa-smile-o",
        onChangecontent: (textAreaValue) => {
          this.$emit('input', {data: textAreaValue})
        }
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
<style>
.emoji-wysiwyg-editor {
  display: inline-block;
  width: 200px;
  padding: 5px;
  height: 50px;
}
</style>

<template>
  <div class="hello">
  <textarea cols="50" rows="10" data-emojiable="true" v-model="emojiData"></textarea>
   <br>
   {{emojiData}}
  </div>
</template>

<script>

import Vue from "vue";
import "./lib/css/emoji.css";
import storageUtils from "./lib/js/util";
import "./lib/js/jquery.emojiarea";
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
      // Finds all elements with `emojiable_selector` and converts them to rich emoji input fields
      // You may want to delay this step if you have dynamically created input fields that appear later in the loading process
      // It can be called as many times as necessary; previously converted input fields will not be converted again
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

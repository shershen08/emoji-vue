<template>
  <div class="emoji-vue-wraper" v-bind:id="id">
    <div class="emoji-picker-container">
      <textarea cols="50" v-model="value" rows="10" data-vue-emojiable="true" class="emoji-vue-textarea"></textarea>
    </div>
  </div>
</template>

<script>
import ns from 'nanoscroller/bin/javascripts/jquery.nanoscroller'
import Vue from 'vue'
import './lib/css/emoji.css'
import 'nanoscroller/bin/css/nanoscroller.css'

import storageUtils from './lib/js/util'
import {EmojiPicker} from './lib/js/emoji-picker'
import {getGuid} from './lib/js/jquery.emojiarea'

import './lib/img/IconsetSmiles.png'
import './lib/img/IconsetSmiles_1x.png'
import './lib/img/IconsetW.png'
import './lib/img/IconsetW_1x.png'

export default {
  name: 'VueEmoji',
  data () {
    return {
      id: getGuid()
    }
  },
  props: {
    width: {
      type: String,
      default: '200'
    },
    height: {
      type: String,
      default: '50'
    },
    value: {
      type: String,
      default: ''
    }
  },
  watch: {
    value: function (newVal) {
      Vue.nextTick(() => {
        this.$el.querySelector('.emoji-wysiwyg-editor').innerHTML = newVal
      })
    }
  },
  methods: {
    clear () {
      this.$el.querySelector('.emoji-wysiwyg-editor').innerHTML = ''
    },
    initEmojiPlugin () {
      window.emojiPicker = new EmojiPicker({
        emojiable_selector: `#${this.id} [data-vue-emojiable=true]`,
        assetsPath: '',
        popupButtonClasses: 'smile-icon',
        onChangecontent: (textAreaValue) => {
          this.$emit('input', {data: textAreaValue})
        }
      })
      window.emojiPicker.discover()
      Vue.nextTick(() => {
        const editor = this.$el.querySelector('.emoji-wysiwyg-editor')
        editor.style.width = `${this.width}px`
        editor.style.height = `${this.height}px`
        this.$el.querySelector('.emoji-picker-container').style.width = `${Number(this.width) + 50}px`
      })
    }
  },
  mounted: function () {
    Vue.nextTick(() => {
      storageUtils()
      this.initEmojiPlugin()
    })
  }
}
</script>

<style>
 i.emoji-picker-icon.emoji-picker {
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAB+ElEQVRYhe2WPS8EURSGHxQkFOIrNHaRbFT8BDWdwkfYWk2Cf+CnIAoJkRAdtXJVW4hkKZesECJ2RzHvNbOzd3bvjO14k5vZnI/3nHPv2XsP/OOvoyOh/RSwAswBM0C/5M9AAbgCjoC7NuX3gyxwCFQBr8WqAgdApl3B88CLyD+BY8mmgV6tacmOZePJZ/23wXeBmghPgJyDT062nnx30gbPi6CqRJJiV741UuxEhmDbU1egJDzgFb+BnXFIsO0GC8CD1rzFJ05/Kq4D1+BT+Fv3Sf2ZPxB0esniF6fPiesLmIg6dVqIViQ/A4ohudci8Th9UVxd4m6JS5HlI/J5/MpK2I+gmT4vzguXBB5l7PKXc0WO+KNrwIeM+9qYQJ8436MKWw+Ys0z6TjSDidPQJ7YEnvQdi8hngY0YnzDfhmzDGNW33DRNIa4JzyVfauK7LJvziDy2CW3VXOu7aEkMYA8YtviNSIclkOG6svg1YBL7RdQD3OJXUsSvdhAY0u+idAWgO+QXvoiyLgmA/SoG/40wSdhWARiP+CS+ik0g8xhFX8IeYAu4Ad60boBN6iuH4DGqkGJAWad9z/FaCn/Af4rNQHKK+0Bitr0GbKcNbpB2JKvwi8qjyOA3kctQ+gXs43jmSa/bLLBKMJYPSF6mfiy/T8j7jz+Mb+FSr4ihuoIZAAAAAElFTkSuQmCC') no-repeat center center;
  width: 24px;
  height: 24px;
  opacity: 0.5;
  cursor: pointer
 }
</style>

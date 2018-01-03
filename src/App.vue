<template>
  <div id="app">
    <VueEmoji @input="onInput"/>
    <br><br><br><br>
    You've typed: {{emojiData}}
  </div>
</template>

<script>
import VueEmoji from './components/VueEmoji'

export default {
  name: 'app',
  data() {
    return {
      emojiData: ""
    };
  },
  methods : {
    onInput(e){
      this.emojiData = e.data
    }
  },
  components: {
    VueEmoji
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <VueEmoji/>
  </div>
</template>

<script>
import VueEmoji from './components/VueEmoji'

export default {
  name: 'app',
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

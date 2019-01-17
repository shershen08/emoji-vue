<template>
  <vue-emoji @input="onInput" :value="myText" />
</template>

<script>
import VueEmoji from '../src/VueEmoji'

export default {
  name: 'app',
  data(){
    return {
      myText: ''
    }
  },
  methods: {
    onInput(event){
     console.log(event.data)
    }
  },
  components: {
    'vue-emoji': VueEmoji
  }
}
</script>

<template>
<section>
  <vue-emoji ref="emoji" width="400" @input="onInput" :value="myText" />
  <br>
  You've entered: {{readText}}<br>
  <button @click="clearTextarea()">Clear</button>
</section>
</template>

<script>
import VueEmoji from '../src/VueEmoji'

export default {
  name: 'app',
  data(){
    return {
      myText: '',
      readText: ''
    }
  },
  methods: {
    clearTextarea(){
      this.$refs.emoji.clear()
    },  
    onInput(event){
     console.log(event.data)
     this.readText = event.data
    }
  },
  components: {
    'vue-emoji': VueEmoji
  }
}
</script>

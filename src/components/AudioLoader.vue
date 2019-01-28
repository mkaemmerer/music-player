<template>
  <div>
    <input type="file" id="file" ref="audioFile" @change="chooseAudio">
    {{file && file.name}}
  </div>
</template>

<script>
  export default {
    name: 'AudioLoader',
    data() {
      return {
        file: null,
      }
    },
    methods: {
      chooseAudio() {
        this.file = this.$refs.audioFile.files[0]
      }
    }
  }
</script>

<template>
  <div class="audio-loader">
    <FileInput @fileAction="(file) => { this.$store.dispatch('broadcastSetFile', file); }" />
  </div>
</template>

<script>
import FileInput from "./FileInput";

export default {
  name: "AudioLoader",
  components: {
    FileInput
  }
};
</script>

<style scoped>
.audio-loader {
  padding: 5px;  
}
</style>

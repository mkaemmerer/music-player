<template>
  <div>
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

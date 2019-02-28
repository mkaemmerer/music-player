<template>
  <div>
    <input type="file" id="file" ref="audioFile" @change="chooseAudio" />
  </div>
</template>

<script>
export default {
  name: "AudioLoader",
  methods: {
    chooseAudio() {
      const file = this.$refs.audioFile.files[0];
      this.$store.dispatch("broadcastSetFile", file);
    }
  }
};
</script>

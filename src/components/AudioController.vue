<template>
  <div>
    <audio ref="audio" controls :src="$store.state.audioFile">
      Your browser does not support the
      <code>audio</code> element.
    </audio>
    <button @click="togglePlayback">
      {{ $store.state.isPaused ? "play" : "pause" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "AudioController",
  methods: {
    togglePlayback() {
      this.$store.state.isPaused
        ? this.$refs.audio.play()
        : this.$refs.audio.pause();
      this.$store.dispatch("togglePlayback");
    }
  }
};
</script>

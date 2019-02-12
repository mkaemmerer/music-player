<template>
  <div>
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
      this.$store.dispatch("togglePlayback");
    }
  }
};
</script>

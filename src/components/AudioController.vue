<template>
  <div>
    <button @click="togglePlayback">
      {{ $store.state.isPaused ? "play" : "pause" }}
    </button>
    <input type="range" min="0.0" max="1.0" step="0.05" :value="$store.state.volume" @change="changeVolume"/>
  </div>
</template>

<script>
export default {
  name: "AudioController",
  methods: {
    togglePlayback() {
      this.$store.dispatch("togglePlayback");
    },
    changeVolume(e) {
      this.$store.dispatch("changeVolume", e.target.value);
    }
  }
};
</script>

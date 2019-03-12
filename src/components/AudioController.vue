<template>
  <div class="audio-controls">
    <div class="volume-controls">
      <input
        class="slider"
        type="range"
        min="0.0"
        max="1.0"
        step="0.05"
        :value="$store.state.volume"
        @change="changeVolume"
      />
    </div>
    <div class="playback-controls">
      <button class="button button--prev">
        Previous Track
      </button>
      <button class="button button--play" @click="broadcastTogglePlayback">
        {{ $store.state.isPaused ? "Play" : "Pause" }}
      </button>
      <button class="button button--next">
        Next Track
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AudioController",
  methods: {
    broadcastTogglePlayback() {
      this.$store.dispatch("broadcastTogglePlayback");
    },
    changeVolume(e) {
      this.$store.dispatch("changeVolume", e.target.value);
    }
  }
};
</script>

<style scoped>
.audio-controls {
  padding: 5px;
}

.volume-controls {
  display: flex;
}

.slider {
  flex: 1;
}

.playback-controls {
  display: flex;
  justify-content: space-between;
}

.button {
  margin: 0;
  border: 0;
  border-radius: 4px;
  padding: 10px;
  font-size: inherit;
  background-color: #dddddd;
  cursor: pointer;
}
.button--prev {

}
.button--play {

}
.button--next {

}
</style>

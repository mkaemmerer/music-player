<template>
  <div class="audio-visualization">AudioVisualization</div>
</template>

<script>
import VerticalFrequencyVis from "../visualizations/frequency-viz";

export default {
  name: "AudioVisualization",
  mounted: function() {
    new VerticalFrequencyVis(this.$store.state.audioSource.analyser);
  }
};
</script>

<style>
.audio-visualization {
  background-color: #dddddd;
  height: 100%;
}
</style>

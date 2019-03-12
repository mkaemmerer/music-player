<template>
  <div class="audio-visualization">
    AudioVisualization
  </div>
</template>

<script>
import AudioSource from "../utils/audio-source";
import VerticalFrequencyVis from "../visualizations/frequency-viz";

const audioSource = new AudioSource();
new VerticalFrequencyVis(audioSource.analyser);

export default {
  name: "AudioVisualization",
};
</script>

<style>
.audio-visualization {
  background-color: #dddddd;
  height: 100%;
}
</style>

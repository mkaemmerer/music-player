<template>
  <div>
    <audio controls :src="$store.state.audioFile">
      Your browser does not support the
      <code>audio</code> element.
    </audio>
  </div>
</template>

<script>
export default {
  name: "AudioController"
};
</script>

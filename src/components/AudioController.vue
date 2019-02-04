<template>
  <div>
    <audio controls :src="audioInput">
      Your browser does not support the
      <code>audio</code> element.
    </audio>
  </div>
</template>

<script>
export default {
  name: "AudioController",
  props: {
    audioInput: String
  }
};
</script>

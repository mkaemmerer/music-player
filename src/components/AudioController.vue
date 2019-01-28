<template>
  <div>
    <audio controls src="./t-rex-roar.mp3">
      Your browser does not support the
      <code>audio</code> element.
    </audio>
    {{audioInput && audioInput.name}}
  </div>
</template>

<script>
export default {
  name: "AudioController",
  props: {
    audioInput: Object
  }
};
</script>

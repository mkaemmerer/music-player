<template>
  <div>
    <input
      class="file-upload__input"
      type="file"
      id="file"
      ref="audioFile"
      @change="chooseAudio"
    />
    <label class="file-upload__button" for="file">addFile</label>
  </div>
</template>

<script>
export default {
  name: "FileInput",
  methods: {
    chooseAudio() {
      const file = this.$refs.audioFile.files[0];
      this.$store.dispatch("broadcastSetFile", file);
    }
  }
};
</script>

<style scoped>
.file-upload__input {
  border: 0;
  margin: 0;
  padding: 0;
  height: 0;
  width: 0;
}

.file-upload__button {
  background-color: steelblue;
  color: white;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  justify-content: center;
}
</style>

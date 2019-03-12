<template>
  <div>
    <input
      class="file-upload__input"
      type="file"
      id="file"
      ref="file"
      @change="chooseFile"
    />
    <label class="file-upload__button" for="file">addFile</label>
  </div>
</template>

<script>
export default {
  name: "FileInput",
  methods: {
    chooseFile() {
      const file = this.$refs.file.files[0];
      this.$emit("fileAction", file);
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

.file-upload__input:focus ~ .file-upload__button {
  box-shadow: 0 0 1px 3px lightblue;
}
</style>

<template>
  <div id="app">
    <div class="sidebar">
      <div class="sidebar-header">
        <AudioLoader />
      </div>
      <div class="sidebar-main">
      </div>
      <div class="sidebar-footer">
        <AudioController />
      </div>
    </div>
    <div class="main">
      <AudioVisualization />
    </div>
  </div>
</template>

<script>
import AudioController from "./components/AudioController.vue";
import AudioLoader from "./components/AudioLoader.vue";
import AudioVisualization from "./components/AudioVisualization.vue";

export default {
  name: "app",
  components: {
    AudioController,
    AudioLoader,
    AudioVisualization
  }
};
</script>

<style>
html, body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  height: 100vh;
}

.sidebar {
  display: flex;
  flex-direction: column;
  width: 300px;
}
.sidebar-header {
}
.sidebar-main {
  flex: 1;
}
.sidebar-footer {
}

.main {
  flex: 1;
}
</style>

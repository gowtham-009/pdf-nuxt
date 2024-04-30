<template>
  <div id="app">
    <h1 style="text-align: center;">PDF-VIEWER</h1>
      <WebViewer :path="`${publicPath}webviewer`" url="https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf"/>
  </div>
</template>

<script>
import WebViewer from '../components/Webviewer'; // Make sure to properly reference the WebViewer component

export default {
  name: 'app',
  components: {
      WebViewer
  },
  data() {
      return {
          publicPath: process.env.BASE_URL
      }
  }
}
</script>

<style>
html,
body {
  margin: 0;
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  height: 100vh;
}
#webviewer {
  height: 100vh;
}
</style>

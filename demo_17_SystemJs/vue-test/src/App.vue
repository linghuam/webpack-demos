<template>
  <div id="app">
    <button @click="handleClick" style="font-size:20px;">click me to import packages</button>
  </div>
</template>

<script>
export default {
  name: 'App',

  methods: {
    handleClick() {
      // eslint-disable-next-line
      System.import('com1').then(res => {
        console.log('import success', res)
      });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

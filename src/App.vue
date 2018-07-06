<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body {
    color: #666666;
    background-color: #F5F5F5;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #app {
    height: inherit;
  }
</style>

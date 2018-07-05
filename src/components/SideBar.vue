<template>
  <div class="sideBar">
    <div>首页/home</div>
    <div>关于/about</div>
    <div>其他/other</div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .sideBar {
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 20vh 5vw;
    height: 100%;
    min-width: 22vw;
  }
  .sideBar div {
    cursor: pointer;
  }
  .sideBar div {
    margin-bottom: 2vh;
  }
  .sideBar div:hover {
    color: #999999;
  }
</style>

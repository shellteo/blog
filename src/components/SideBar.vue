<template>
  <div class="sideBarBox">
    <div class="siteTitle">Just a New Thought</div>
    <div class="sideBar">
      <div>首页/home</div>
      <div>关于/about</div>
      <div>其他/other</div>
    </div>
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

<style lang="scss" scoped>
  .sideBarBox {
    position: fixed;
    width: 20vw;
    height: 100%;
    border-right: 1px solid #999;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .siteTitle {
    color: #333333;
    font-size: 18px;
    padding: 5vh 1vw;
    box-sizing: border-box;
    border-bottom: 1px solid #999;
    text-align: center;
  }
  .sideBar {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15vh 5vw;
    box-sizing: border-box;
    font-size: 16px;
    align-self: stretch;
    height: 100%;
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

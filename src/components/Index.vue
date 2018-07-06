<template>
  <div class="page-container">
    <sideBar></sideBar>
    <div class="content">
      <div class="postList">
        <div class="post">
          <div class="post-title">车品代发/入库前端页面解析</div>
          <div class="post-meta">
            <i class="el-icon-date"></i>
            <div>2014-06-19</div>
          </div>
          <div class="post-content">
            Yarn 对你的代码来说是一个包管理器， 你可以通过它使用全世界开发者的代码，或者分享自己的代码。 Yarn 做这些快捷、安全、可靠，所以你不用担心什么。
            通过Yarn你可以使用其他开发者针对不同问题的解决方案，使自己的开发过程更简单。 使用过程中遇到问题，你可以将其上报或者贡献解决方案。一旦问题被修复，Yarn会更新保持同步。
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="pagination">
          <div class="arrowBox"><i class="el-icon-arrow-left"></i></div>
          <ul class="pager">
            <li class="number">1</li>
            <li class="number">2</li>
            <li class="number">3</li>
            <li class="number">4</li>
            <li class="more"><i class="el-icon-more"></i></li>
            <li class="number">10</li>
          </ul>
          <div class="arrowBox"><i class="el-icon-arrow-right"></i></div>
        </div>
        <div>2018 © MaxWell.All Rights Reserved.</div>
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from '@/components/SideBar'
export default {
  name: 'Index',
  data () {
    return {
      menuVisible: false
    }
  },
  components: {
    sideBar
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .page-container {
    height: 100%;
  }
  .content {
    margin-left: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .postList {
  }
  .post {
    cursor: pointer;
    border-bottom: 1px solid #999;
    padding: 3vh 3vw;
    margin: 0 10vw;
    box-sizing: border-box;
  }
  .post:last-child {
    border-bottom: none;
  }
  .post:hover {
    background-color: #E8E8E8;
  }
  .post-title {
    font-size: 16px;
    color: #333;
    margin-bottom: 5px;
  }
  .post-meta {
    font-size: 14px;
    color: #999;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .post-meta div {
    display: inline-block;
  }
  .post-content {
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
  }
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .pagination {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    align-self: flex-end;
    margin: 10vh 10vw;
  }
  .arrowBox {
    cursor: pointer;
    padding: 0 4px;
  }
  .arrowBox i:hover, .pager li:hover{
    color: #999999;
  }
  .pager {
    user-select: none;
    list-style: none;
    display: inline-block;
    vertical-align: top;
    font-size: 0;
    padding: 0;
    margin: 0;
  }
  .pager li {
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    margin: 0;
  }
  .md-icon {
    margin: 0;
  }

</style>

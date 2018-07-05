<template>
  <div class="page-container">
    <sideBar></sideBar>
    <div class="list">
      <div></div>
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
</style>

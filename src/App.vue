<template>
  <div id="app">
    <el-container style="height: 100vh">
      <el-header :style="{
        height: '60px',
        borderBottom: '1px solid rgba(0,0,0,.07)'
      }">
        <app-header></app-header>
      </el-header>
      <el-container style="height: calc(100vh - 60px);">
        <el-main>
          <app-main></app-main>
        </el-main>
        <el-aside width="260px">
          <app-aside></app-aside>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import AppHeader from '@/views/Header'
import AppMain from '@/views/Main'
import AppAside from '@/views/sider/index'
export default {
  name: 'app',
  components: {
    AppHeader,
    AppAside,
    AppMain
  }

}
</script>

<style lang="scss">
html, body {
  margin: 0;
  font-family: 'Fira Code', 'Source Han Sans HW SC';
}
#app {
  width: 100%;
  height: 100%;
}
#app * {
  box-sizing: border-box;
}
</style>

<template>
  <div id="app">
   <Header></Header>
   <router-view></router-view>
   <!-- 在home和search是显示footer组件的 在login和register是隐藏的 -->
   <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
</style>

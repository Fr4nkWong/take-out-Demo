<template>
  <div id="app">
    <v-header v-bind:seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link :to="{path:'/goods'}">
        <a>商品</a>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'/ratings'}">
        <a>评价</a>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'/seller'}">
        <a>商家</a>
        </router-link>
      </div>
    </div>
    <router-view v-bind:seller="seller"></router-view>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'

const ERR_OK = 0

export default{
  data() {
    return {
      seller: {}
    }
  },
  created() {
    this.$http.get('/api/seller').then((response) => {
      response = response.body
      console.log(response)
      if (response.errno === ERR_OK) {
        this.seller = response.data
      }
    })
  },
  components: {
    'v-header': Header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl"

  #app
    .tab
      display:flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex: 1
        text-align: center
        & > a
          display: block
          text-decoration: none
          font-size: 14px
          color: rgb(77, 85, 93)
</style>

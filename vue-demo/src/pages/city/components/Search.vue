<template>
    <div>
        <div class="search">
            <input type="text" v-model="keyword" placeholder="输入城市名或拼音" class="searchInput">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-topbottom" v-for="item of list" v-bind:key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-topbottom" v-show="hasNoData">搜索结果不存在</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
 @import "~styles/varibles.styl"
.search
  padding 0 .1rem
  height .72rem
  background $bgColor
  .searchInput
    box-sizing border-box
    height .62rem
    line-height .62rem
    width 100%
    border-radius .06rem
    text-align center
    color #666
    padding 0 .1rem
.search-content
  z-index 1
  position absolute
  overflow hidden
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #eee
  .search-item
    line-height .62rem
    padding-left .2rem
    background #ffffff
    color #666
</style>

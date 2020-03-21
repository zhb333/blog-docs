<template>
  <div class="home">
    <vue-draggable-resizable
      :snap="true"
      :w="50"
      :h='50'
      :x="item.x"
      :y="item.y"
      :class-name="item.className"
      :grid="[50,50]"
      v-for="(item, index) in pieces"
      :key="item.className + index"
      :resizable="false"
      :isConflictCheck="true"
    >
      {{ words[index] }}
    </vue-draggable-resizable>
    <canvas
      class="clock"
      ref="canvas"
      style="transition: 0.7s"
    >您的浏览器太古老，不支持 canvas</canvas>
    <h2 class="motto">种一棵树最好的时间是十年前，其次是现在</h2>
  </div>
</template>

<script>
import shuffle from 'lodash/shuffle'
import VueDraggableResizable from 'vue-draggable-resizable-gorkys'
import CanvasClock from './clock'
import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css'

const xPos = Array(7).fill(1).map((v, i) => (i + 1) * 50 + 25)
const yPos = Array(7).fill(1).map((v, i) => i * 50 + 25)
const info = '临破咒师悲爱心魄兵斗者皆阵列魂鬼财神权贪嗔痴佛悟空色恨愤怒怨责'

export default {
  components: {
    VueDraggableResizable
  },
  computed: {
    xPos() {
      return shuffle(xPos)
    },
    yPos() {
      return shuffle(yPos)
    },
    pieces() {
      return this.xPos.map((x, i) => {
        return { x, y: this.yPos[i], className: i % 2 === 0 ? 'black' : 'white' }
      })
    },
    words() {
      return shuffle(info.split(''))
    }
  },
  mounted () {
    let clock = new CanvasClock({
      dom: this.$refs.canvas,
      maxWidth: 530,
      color: '#999'
    })

    clock.start()

    this.$once('hook:beforeDestroy', function () {
      clock.stop()
      clock = null
    })
  },
}
</script>

<style lang="stylus" scoped>
.home
  position absolute
  left 0
  right 0
  top $headerHeight
  bottom 60px
  background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 50px 50px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 50px 50px

.black, .white
  border-radius 50%
  cursor move
  text-align center
  line-height 50px
  font-size 18px
  font-weight bold

.black
  background-color #000
  box-shadow 0 0 10px #222
  color #fff

.white
  background-color #fff
  box-shadow 0 0 10px #999

.motto
  position absolute
  z-index -1
  width 100%
  text-align center
  bottom 30%
  font-weight bottom
  color #666
  font-size 28px
  text-shadow 5px 2px 6px #666

.clock
  position absolute
  left 50%
  top 10%
  transform translateX(-50%)
  z-index -1

@media (max-width: $MQMobile)
  .black, .white
    display none

</style>

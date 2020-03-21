export default class CanvasClock {
  constructor ({
    id = '',
    dom = null,
    width = window.document.documentElement.clientWidth ||
    window.document.body.clientWidth,
    maxWidth = window.document.documentElement.clientWidth ||
    window.document.body.clientWidth,
    minWidth = 320,
    color = '#006699'
  } = {}) {
    // 是否支持canvas检测
    if (!this.isSupport()) throw new Error('浏览器太古老，不支持 "canvas"')

    let canvas = id && document.getElementById(id)

    canvas = canvas || dom

    // 参数检测
    if (!canvas) throw new ReferenceError('canvas 不存在')
    if (typeof width !== 'number' || width < 0) throw new Error('实例参数 "width" 不正确')
    if (typeof minWidth !== 'number' || minWidth < 0) throw new Error('实例参数 "minWidth" 不正确')
    if (typeof maxWidth !== 'number' || maxWidth < 0) throw new Error('实例参数 "maxWidth" 不正确')

    // 属性初始化
    this.color = color
    this.canvasW = width
    this.minWidth = minWidth
    this.maxWidth = maxWidth
    this.balls = [] // 存放效果小球
    this.curShowTimeSeconds = this.getCurrentShowTimeSeconds() // 今天走过的秒数

    // 随机颜色取值
    this.colors = [
      '51, 181, 229',
      '0, 153, 204',
      '170, 102, 204',
      '153, 51, 204',
      '153, 204, 0',
      '102, 153, 0',
      '255, 187, 51',
      '255, 136, 0',
      '255, 68, 68',
      '204, 0, 0'
    ]

    // 数字的数据结构
    this.digits = [
      [
        [0, 0, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 0, 1, 1, 0],
        [0, 0, 1, 1, 1, 0, 0]
      ], // 0
      [
        [0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1, 1]
      ], // 1
      [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1]
      ], // 2
      [
        [1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
      ], // 3
      [
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 1, 1, 0],
        [1, 1, 0, 0, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 1]
      ], // 4
      [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
      ], // 5
      [
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
      ], // 6
      [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0]
      ], // 7
      [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
      ], // 8
      [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 0]
      ], // 9
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]// :
    ]

    this.cxt = canvas.getContext('2d')
    this.timer = null
    this.setCanvasSize(this.canvasW)
    this.stop = this.stop.bind(this)
  }

  // 判断是否支持canvas
  isSupport () {
    return !!document.createElement('canvas').getContext
  }

  setCanvasSize (w) {
    this.canvasW = w < this.minWidth ? this.minWidth : w // canvas 宽度
    this.canvasW = w > this.maxWidth ? this.maxWidth : w
    this.canvasH = Math.round(this.canvasW * 2 / 3) // canvas 高度
    this.marginL = Math.round(this.canvasW * 1.5 / 10) // 第一个数字据左上角 left
    this.marginT = Math.round(this.canvasH / 5) // 第一个数字据左上角 top
    this.radius = Math.round(this.canvasW * 7 / 10 / 108) - 1 // 小球半径
    this.marginL = parseInt((this.canvasW - 108 * (this.radius + 1)) / 2)
    this.cxt.canvas.width = this.canvasW
    this.cxt.canvas.height = this.canvasH
  }

  // 获取今天走过的秒数
  getCurrentShowTimeSeconds () {
    const date = new Date()
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()
  }

  // 画一个球
  drawABall (x, y) {
    this.cxt.beginPath()
    this.cxt.arc(x, y, this.radius, 0, 2 * Math.PI)
    this.cxt.closePath()
    this.cxt.fill()
  }

  // 渲染一个数字
  renderDigit (x, y, num) {
    this.cxt.fillStyle = this.color
    const matrix = this.digits[num]
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 1) {
          const cx = x + j * 2 * (this.radius + 1) + (this.radius + 1)
          const cy = y + i * 2 * (this.radius + 1) + (this.radius + 1)
          this.drawABall(cx, cy)
        }
      }
    }
  }

  // 添加效果小球
  addBalls (x, y, num) {
    const matrix = this.digits[num]
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 1) {
          const cx = x + j * 2 * (this.radius + 1) + (this.radius + 1)
          const cy = y + i * 2 * (this.radius + 1) + (this.radius + 1)

          // 一个球的描述
          const aBall = {
            x: cx,
            y: cy,
            vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4, // x轴正负方向的速度
            vy: Math.floor(Math.random() * -5), // y轴负方向的速度
            g: 1 + Math.random(), // 重力加速度
            color: this.colors[Math.floor(Math.random() * this.colors.length)], // 随机颜色
            opcity: 1 // 透明度
          }

          this.balls.push(aBall)
        }
      }
    }
  }

  getHoursBySeconds (seconds) {
    return parseInt(seconds / 3600)
  }

  getMinutesBySeconds (seconds) {
    const hours = this.getHoursBySeconds(seconds)
    return parseInt((seconds - hours * 3600) / 60)
  }

  getSeconds (seconds) { return parseInt(seconds % 60) }

  // 将存在于画布中的效果小球状态进行更新
  updateBalls () {
    // 根据物理运动规律，计算小球的运动轨迹。 摩擦系数为0.75
    for (let i = 0; i < this.balls.length; i++) {
      const ball = this.balls[i]
      ball.x += ball.vx
      ball.y += ball.vy
      ball.vy += ball.g

      // 碰撞检测
      if (ball.y >= this.canvasH - this.radius) {
        ball.y = this.canvasH - this.radius
        ball.vy = -ball.vy * 0.75
      }

      // 改变小球的透明度
      ball.opcity -= 0.05
    }

    // 效果小球的计数器
    var cnt = 0
    for (var i = 0; i < this.balls.length; i++) {
      const ball = this.balls[i]
      if (ball.opcity > 0 && ball.x + this.radius > 0 && ball.x - this.radius < this.canvasW) {
        this.balls[cnt++] = ball
      }
    }

    // 去除看不见的小球
    while (this.balls.length > cnt) {
      this.balls.pop()
    }
  }

  // 根据时间的变化，改变渲染数据
  update () {
    const nextShowTimeSeconds = this.getCurrentShowTimeSeconds()

    const curSeconds = this.curShowTimeSeconds % 60
    const nextSeconds = nextShowTimeSeconds % 60

    // 每过一秒，对比时分秒的变化，添加效果小球
    if (nextSeconds !== curSeconds) {
      const curHours = this.getHoursBySeconds(this.curShowTimeSeconds)
      const nextHours = this.getHoursBySeconds(nextShowTimeSeconds)

      const curMinutes = this.getMinutesBySeconds(this.curShowTimeSeconds)
      const nextMinutes = this.getMinutesBySeconds(nextShowTimeSeconds)

      if (parseInt(curHours / 10) !== parseInt(nextHours / 10)) {
        this.addBalls(this.marginL + 0, this.marginT, parseInt(curHours / 10))
      }
      if (parseInt(curHours % 10) !== parseInt(nextHours % 10)) {
        this.addBalls(this.marginL + 15 * (this.radius + 1), this.marginT, parseInt(curHours / 10))
      }

      if (parseInt(curMinutes / 10) !== parseInt(nextMinutes / 10)) {
        this.addBalls(this.marginL + 39 * (this.radius + 1), this.marginT, parseInt(curMinutes / 10))
      }
      if (parseInt(curMinutes % 10) !== parseInt(nextMinutes % 10)) {
        this.addBalls(this.marginL + 54 * (this.radius + 1), this.marginT, parseInt(curMinutes % 10))
      }

      if (parseInt(curSeconds / 10) !== parseInt(nextSeconds / 10)) {
        this.addBalls(this.marginL + 78 * (this.radius + 1), this.marginT, parseInt(curSeconds / 10))
      }
      if (parseInt(curSeconds % 10) !== parseInt(nextSeconds % 10)) {
        this.addBalls(this.marginL + 93 * (this.radius + 1), this.marginT, parseInt(nextSeconds % 10))
      }
      this.curShowTimeSeconds = nextShowTimeSeconds
      // console.log(this.balls.length)
    }

    // 动画执行每一帧时，效果小球的状态变化
    this.updateBalls()
  }

  // 渲染画布
  render () {
    this.cxt.clearRect(0, 0, this.canvasW, this.canvasH)

    // 获取时分秒
    const hours = this.getHoursBySeconds(this.curShowTimeSeconds)
    const minutes = this.getMinutesBySeconds(this.curShowTimeSeconds)
    const seconds = this.getSeconds(this.curShowTimeSeconds)

    // 在画布上渲染时分秒
    this.renderDigit(this.marginL, this.marginT, parseInt(hours / 10))
    this.renderDigit(this.marginL + 15 * (this.radius + 1), this.marginT, parseInt(hours % 10))

    this.renderDigit(this.marginL + 30 * (this.radius + 1), this.marginT, 10)

    this.renderDigit(this.marginL + 39 * (this.radius + 1), this.marginT, parseInt(minutes / 10))
    this.renderDigit(this.marginL + 54 * (this.radius + 1), this.marginT, parseInt(minutes % 10))

    this.renderDigit(this.marginL + 69 * (this.radius + 1), this.marginT, 10)

    this.renderDigit(this.marginL + 78 * (this.radius + 1), this.marginT, parseInt(seconds / 10))
    this.renderDigit(this.marginL + 93 * (this.radius + 1), this.marginT, parseInt(seconds % 10))

    // 渲染发散小球
    for (let i = 0; i < this.balls.length; i++) {
      const ball = this.balls[i]
      const { x, y, color, opcity } = ball
      this.cxt.fillStyle = `rgba(${color}, ${opcity})`
      this.drawABall(x, y)
    }
  }

  start () {
    const timeFn = () => {
      this.render()
      this.update()
      this.timer = setTimeout(timeFn, 50)
    }
    timeFn()
  }

  stop () {
    window.clearTimeout(this.timer)
  }
}

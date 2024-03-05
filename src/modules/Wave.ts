import {Enemy} from './Enemy'
import {Game} from './Game'

interface WaveOptions {
  enemy: 'default'
  rows: number
  columns: number
  xOffset: number
  yOffset: number
  speed: number
  targetY: number
}

export class Wave {
  game: Game
  enemies: Enemy[]
  config: WaveOptions
  x
  y
  width
  height

  constructor(game: Game, options: WaveOptions) {
    this.game = game
    this.enemies = []
    this.config = options
    this.x = options.xOffset
    this.y = options.yOffset
    this.width = 0
    this.height = 0

    this.createEnemies()
  }

  update(deltaTime: number) {
    const slidingSpeed = 10

    if (this.config.yOffset < this.config.targetY) {
      this.config.yOffset += slidingSpeed
    }

    this.enemies.forEach((enemy, index) => {
      if (this.config.yOffset < this.config.targetY) {
        enemy.slideToScreen(slidingSpeed)
      }
      if (enemy.markForDeletion) {
        this.enemies.splice(index, 1)
      }
      enemy.update(this.config.speed)
    })
    this.x += this.config.speed
    if (this.x + this.width > this.game.width || this.x < 0) {
      this.config.speed *= -1
    }
  }

  draw(context: CanvasRenderingContext2D) {
    this.enemies.forEach((enemy) => enemy.draw(context))
  }

  createEnemies() {
    for (let x = 0; x < this.config.columns; x++) {
      for (let y = 0; y < this.config.rows; y++) {
        if (this.config.enemy === 'default') {
          const scale = 1.5
          const enemy = new Enemy(
            this.game,
            x * 31 * scale + this.config.xOffset,
            y * 39 * scale + this.config.yOffset,
            31,
            39,
            scale
          )
          this.enemies.push(enemy)
        }
      }
    }

    const enemyWidth = this.enemies[0].width
    const enemyHeight = this.enemies[0].height

    this.width = this.config.columns * enemyWidth
    this.height = this.config.rows * enemyHeight
  }
}

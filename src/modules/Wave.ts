import {Enemy} from './Enemy'
import {Game} from './Game'

interface WaveOptions {
  enemyName: string
  rows: number
  columns: number
}

export class Wave {
  game: Game
  enemies: Enemy[]
  config: WaveOptions

  constructor(game: Game, options: WaveOptions) {
    this.game = game
    this.enemies = []
    this.config = options
  }

  // update(deltaTime: number) {
  //   this.enemies.forEach((enemy) => enemy.update(this.speedX))
  //   this.x += this.speedX

  //   if (this.x + this.width > this.game.width || this.x < 0) {
  //     this.speedX *= -1
  //   }
  // }

  // draw(context: CanvasRenderingContext2D) {
  //   this.enemies.forEach((enemy) => enemy.draw(context))
  //   context.strokeStyle = 'white'
  //   context.strokeRect(this.x, this.y, this.width, this.height)
  // }

  // createEnemies(enemyWidth: number, enemyHeight: number) {
  //   for (let x = 0; x < this.rows; x++) {
  //     for (let y = 0; y < this.columns; y++) {
  //       const enemyX = x * enemyWidth
  //       const enemyY = y * enemyHeight + 20

  //       this.enemies.push(new Enemy(this.game, enemyX, enemyY, enemyWidth, enemyHeight))
  //     }
  //   }
  // }
}

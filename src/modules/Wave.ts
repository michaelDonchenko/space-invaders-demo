import {Enemy} from './Enemy'
import {Game} from './Game'

export class Wave {
  public game: Game
  public enemies: Enemy[]
  public width
  public height
  public x
  public y
  public speedX
  public speedY
  public rows
  public columns
  public fps
  public frameInterval
  public frameTimer

  constructor(
    game: Game,
    x: number,
    y: number,
    speedX: number,
    speedY: number,
    rows: number,
    columns: number,
    enemyWidth: number,
    enemyHeight: number
  ) {
    this.game = game
    this.enemies = []
    this.x = x
    this.y = y
    this.speedX = speedX
    this.speedY = speedY
    this.rows = rows
    this.columns = columns
    this.width = this.rows * enemyWidth
    this.height = this.columns * enemyHeight
    this.fps = 60
    this.frameInterval = 1000 / this.fps
    this.frameTimer = 0

    this.createEnemies(enemyWidth, enemyHeight)
  }

  update(deltaTime: number) {
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0
      this.enemies.forEach((enemy) => enemy.update(this.speedX))
      this.x += this.speedX

      if (this.x + this.width > this.game.width || this.x < 0) {
        this.speedX *= -1
      }
    } else {
      this.frameTimer += deltaTime
    }
  }

  draw(context: CanvasRenderingContext2D) {
    this.enemies.forEach((enemy) => enemy.draw(context))
  }

  createEnemies(enemyWidth: number, enemyHeight: number) {
    for (let x = 0; x < this.rows; x++) {
      for (let y = 0; y < this.columns; y++) {
        const enemyX = x * enemyWidth
        const enemyY = y * enemyHeight

        this.enemies.push(new Enemy(this.game, enemyX, enemyY, enemyWidth, enemyHeight))
      }
    }
  }
}

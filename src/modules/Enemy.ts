import {Game} from './Game'

export class Enemy {
  public game: Game
  public x
  public y
  public width
  public height
  public image

  constructor(game: Game, x: number, y: number, enemyWidth: number, enemyHeight: number) {
    this.game = game
    this.x = x
    this.y = y
    this.image = document.getElementById('enemy') as HTMLImageElement
    this.width = enemyWidth
    this.height = enemyHeight
  }

  update(speedX: number) {
    this.x += speedX
  }

  draw(context: CanvasRenderingContext2D) {
    context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height)
  }
}

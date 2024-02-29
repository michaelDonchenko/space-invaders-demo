import {collisionDetection} from '../utils'
import {Game} from './Game'

export class Projectile {
  x
  y
  speed
  width
  height
  game: Game

  constructor(game: Game, x: number, y: number) {
    this.x = x
    this.y = y
    this.speed = 25
    this.width = 4
    this.height = 10
    this.game = game
  }

  update() {
    this.y -= this.speed
    if (collisionDetection(this, this.game.enemy)) {
      this.game.projectiles = this.game.projectiles.filter((projectile) => projectile !== this)
      this.game.enemy.hp -= 10
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = 'red'
    context.fillRect(this.x, this.y, this.width, this.height)
  }
}

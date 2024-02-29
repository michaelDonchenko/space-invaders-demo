import {Game} from './Game'

export class Enemy {
  game: Game
  x
  y
  imageWidth
  imageHeight
  width
  height
  image
  scale
  hp
  markForDeletion

  constructor(game: Game, x: number, y: number, imageWidth: number, imageHeight: number) {
    this.game = game
    this.x = x
    this.y = y
    this.image = document.getElementById('enemy') as HTMLImageElement
    this.imageWidth = imageWidth
    this.imageHeight = imageHeight
    this.scale = 1.75
    this.width = this.imageWidth * this.scale
    this.height = this.imageHeight * this.scale
    this.hp = 20
    this.markForDeletion = false
  }

  update(speedX: number) {
    this.x += speedX

    if (this.hp <= 0) {
      this.markForDeletion = true
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.drawImage(this.image, 0, 0, this.imageWidth, this.imageHeight, this.x, this.y, this.width, this.height)

    context.strokeStyle = 'white'
    context.strokeRect(this.x, this.y, this.width, this.height)
  }
}

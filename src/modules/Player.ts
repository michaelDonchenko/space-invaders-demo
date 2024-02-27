import {Game} from './Game'
import {Projectile} from './Projectile'

export class Player {
  public game
  public width
  public height
  public x
  public y
  public image

  constructor(game: Game) {
    this.game = game
    this.width = 112.5
    this.height = 56.25
    this.x = this.game.width / 2 - this.width / 2
    this.y = this.game.height - this.height - 40
    this.image = document.getElementById('player') as HTMLImageElement

    window.addEventListener('mousemove', (e) => {
      this.x = e.x - this.width / 2
      this.y = e.y - this.height / 2
    })

    window.addEventListener('click', () => {
      this.game.projectiles.push(new Projectile(this.x + this.width / 2, this.y + 5))
    })
  }

  update() {}

  draw(context: CanvasRenderingContext2D) {
    context.drawImage(this.image, 0, 0, 450, 225, this.x, this.y, this.width, this.height)
  }
}

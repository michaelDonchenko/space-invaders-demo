import {Player} from './Player'
import {Projectile} from './Projectile'
import {Wave} from './Wave'

export class Game {
  public width
  public height
  public player
  public projectiles: Projectile[]
  public wave: Wave

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
    this.player = new Player(this)
    this.projectiles = []
    this.wave = new Wave(this, 0, 0, 1, 0, 10, 5, 31, 39)
  }

  update(deltaTime: number) {
    this.player.update()
    this.projectiles.forEach((projectile, index) => {
      projectile.update()

      if (projectile.y + projectile.height < 0) {
        this.projectiles.splice(index, 1)
      }
    })
    this.wave.update(deltaTime)
  }

  draw(context: CanvasRenderingContext2D) {
    this.player.draw(context)
    this.projectiles.forEach((projectile) => {
      projectile.draw(context)
    })
    this.wave.draw(context)
  }
}

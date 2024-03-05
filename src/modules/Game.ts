import {Player} from './Player'
import {Projectile} from './Projectile'
import {Wave} from './Wave'

const wave1 = {
  enemy: 'default',
  rows: 5,
  columns: 8,
  xOffset: 20,
  yOffset: -500,
  speed: 2,
  targetY: 20,
} as const

export class Game {
  width
  height
  player
  projectiles: Projectile[]
  wave: Wave

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
    this.player = new Player(this)
    this.projectiles = []
    this.wave = new Wave(this, wave1)
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

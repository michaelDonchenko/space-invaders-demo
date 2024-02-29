import {Enemy} from './Enemy'
import {Player} from './Player'
import {Projectile} from './Projectile'
import {Wave} from './Wave'

const wave1 = {
  enemyName: 'regular',
  rows: 5,
  columns: 5,
}

export class Game {
  width
  height
  player
  projectiles: Projectile[]
  enemy: Enemy

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
    this.player = new Player(this)
    this.projectiles = []
    this.enemy = new Enemy(this, 200, 200, 31, 39)
    // this.wave = new Wave(this, wave1)
  }

  update(deltaTime: number) {
    this.player.update()
    this.projectiles.forEach((projectile, index) => {
      projectile.update()

      if (projectile.y + projectile.height < 0) {
        this.projectiles.splice(index, 1)
      }
    })
    this.enemy.update(0)
  }

  draw(context: CanvasRenderingContext2D) {
    this.player.draw(context)
    this.projectiles.forEach((projectile) => {
      projectile.draw(context)
    })
    this.enemy.draw(context)
  }
}

export class Projectile {
  public x
  public y
  public speed
  public width
  public height

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
    this.speed = 25
    this.width = 3
    this.height = 6
  }

  update() {
    this.y -= this.speed
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = 'red'
    context.fillRect(this.x, this.y, this.width, this.height)
  }
}

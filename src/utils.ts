interface Rect {
  x: number
  y: number
  width: number
  height: number
}

export function collisionDetection<Rect1 extends Rect, Rect2 extends Rect>(a: Rect1, b: Rect2) {
  if (a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y) {
    // Collision detected!
    return true
  } else {
    // No collision
    return false
  }
}

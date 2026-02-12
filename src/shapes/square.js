export function drawSquare(ctx, {size, color, x, y}) {
  ctx.fillStyle = color;
  ctx.fillRect(x - size / 2, y - size / 2, size, size);
}
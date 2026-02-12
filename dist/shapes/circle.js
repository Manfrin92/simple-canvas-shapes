export function drawCircle(ctx, {size, color, x, y}) {
ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, size / 2, 0, 2 * Math.PI);
  ctx.fill();
}
export function drawTriangle(ctx, { size, color, x, y }) {
    ctx.fillStyle = color;
    const height = (Math.sqrt(3) / 2) * size;
    ctx.beginPath();
    ctx.moveTo(x, y - height / 2);
    ctx.lineTo(x - size / 2, y + height / 2);
    ctx.lineTo(x + size / 2, y + height / 2);
    ctx.closePath();
    ctx.fill();
}   
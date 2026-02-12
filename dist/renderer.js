import { shapes } from "./shapes/index.js";

export function createRender(canvas) {
    if (!(canvas instanceof HTMLCanvasElement)) {
        throw new Error("Expected a canvas element");
    }
    const ctx = canvas.getContext("2d");

    if (!ctx) {
        throw new Error("Could not get canvas context");
    }

    function clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function draw({ shape, size, color, x, y }) {
        const drawShape = shapes[shape];
        if (!drawShape) {
            throw new Error(`Unknown shape: ${shape}`);
        }

        const centerX = x ?? canvas.width / 2;
        const centerY = y ?? canvas.height / 2;

        drawShape(ctx, { size, color, x: centerX, y: centerY });
    }

    return {
        clear,
        draw
    };
}
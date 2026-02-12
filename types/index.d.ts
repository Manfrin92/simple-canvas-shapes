export type ShapeType = 'circle' | 'square' | 'triangle';

export interface DrawOptions {
    shape: ShapeType;
    size: number;
    color: string;
    x?: number;
    y?: number;
}

export interface Renderer {
    draw(options: DrawOptions): void;
    clear(): void;
}

export function createRenderer(canvas: HTMLCanvasElement): Renderer;
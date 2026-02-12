import { createRenderer } from "../dist/index.js";

const canvas = document.createElement("canvas");

const renderer = createRenderer(canvas);

renderer.draw({
  shape: "circle",
  size: 100,
  color: "blue"
});

// fail
renderer.draw({
  shape: "bob",
  size: 100,
  color: "blue"
});

import { createRender } from "../dist/index.js";

const canvas = document.createElement("canvas");

const renderer = createRender(canvas);

renderer.draw({
  shape: "circle",
  size: 100,
  color: "blue",
  x: 50,
  y: 50
});

// fail
renderer.draw({
  // shape: "bob",
  size: 100,
  color: "blue"
});

export const config = {
  camera: {
    far: 400,
    fov: 30,
    near: 0.1,
  },
  color: 0xf886d4,
  // colorCycleSpeed: 5,
  forceAnimate: true,
  hh: 50,
  hue: 310,
  lightness: 50,
  material: {
    options: {
      wireframe: false,
    },
  },
  saturation: 30,
  shininess: 35,
  waveHeight: 15,
  waveSpeed: 0.25,
  ww: 50,
};

export const disableControls = {
  gyroControls: false,
  mouseControls: false,
  mouseEase: false,
  touchControls: false,
};

export const isWebGLAvailable = typeof WebGLRenderingContext !== "undefined";

export const libs = [
  "/System/Vanta.js/three.min.js",
  "/System/Vanta.js/vanta.waves.min.js",
];

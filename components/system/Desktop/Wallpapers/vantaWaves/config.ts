export const config = {
  color: 0xf886d4,
  // colorCycleSpeed: 5,
  forceAnimate: true,
  hue: 310,
  lightness: 50,
  saturation: 30,
  shininess: 35,
  waveHeight: 15,
  waveSpeed: 0.25,
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

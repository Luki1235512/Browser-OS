import { adjustHue } from "polished";
import { MILLISECONDS_IN_SECOND } from "utils/constants";

const fps = 10;
const timePerFrame = MILLISECONDS_IN_SECOND / fps;

type ColorCycle = {
  stop: () => void;
};

const colorCycle = (
  initialColor: number,
  callback: (newColor: number) => void
): ColorCycle => {
  let lastFrameTime = Date.now();
  let degree = 332;
  let animationFrameId: number;
  let direction = true;

  const updateColor = (): void => {
    const currentFrameTime = Date.now();
    const timeSinceLastFrame = currentFrameTime - lastFrameTime;

    if (timeSinceLastFrame > timePerFrame) {
      if (degree >= 345 || degree <= 331) {
        direction = !direction;
      }
      degree += direction ? 1 : -1;

      lastFrameTime = currentFrameTime - (timeSinceLastFrame % timePerFrame);

      callback(
        Number(
          adjustHue(degree, `#${initialColor.toString(16)}`).replace("#", "0x")
        )
      );
    }

    animationFrameId = requestAnimationFrame(updateColor);
  };

  animationFrameId = requestAnimationFrame(updateColor);

  const stop = (): void => cancelAnimationFrame(animationFrameId);

  return { stop };
};

export default colorCycle;

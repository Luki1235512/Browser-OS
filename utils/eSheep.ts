import { loadFiles } from "./functions";

declare global {
  interface Window {
    Sheep?: new (config: { allowPopup: string; collisionWith: string[] }) => {
      Start: (animationXmlUrl: string) => void;
    };
  }
}

const spawnSheep = (): Promise<void> =>
  loadFiles(["/Promise Files/eSheep/eSheep.js"]).then(() => {
    if (window.Sheep) {
      const sheep = new window.Sheep({
        allowPopup: "no",
        collisionWith: ["nav", "section"],
      });
      sheep.Start("/Promise Files/eSheep/animations.xml");
    }
  });

export default spawnSheep;

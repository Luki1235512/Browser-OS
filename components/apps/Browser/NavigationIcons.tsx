import { useMemo } from "react";

type ArrowProps = {
  direction: "left" | "right";
};

export const Arrow: FC<ArrowProps> = ({ direction }) => {
  const style = useMemo(
    () => (direction === "right" ? { transform: "scaleX(-1)" } : undefined),
    [direction]
  );

  return (
    <svg style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
  );
};

export const Stop: FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

import { basename, dirname, join } from "path";
import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { cleanUpBufferUrl } from "utils/functions";

export type IconProps = {
  displaySize?: number;
  imgSize: number;
  moving?: boolean;
};

const StyledIcon = styled.img.attrs<IconProps>(
  ({ imgSize, displaySize, src = "" }) => ({
    draggable: false,
    height: displaySize || imgSize,
    src:
      !src || src.startsWith("blob:")
        ? src
        : join(dirname(src), `${imgSize}x${imgSize}`, basename(src)),
    width: displaySize || imgSize,
  })
)<IconProps>`
  object-fit: contain;
  opacity: ${({ moving }) => (moving ? 0.5 : 1)};
`;

const Icon = (
  props: IconProps & React.ImgHTMLAttributes<HTMLImageElement>
): JSX.Element => {
  const [loaded, setLoaded] = useState(false);

  useEffect(
    () => () => {
      // eslint-disable-next-line react/destructuring-assignment
      if (loaded && props.src?.startsWith("blob:")) cleanUpBufferUrl(props.src);
    },
    [loaded, props]
  );

  return (
    <StyledIcon
      onLoad={() => setLoaded(true)}
      style={{ visibility: loaded ? "visible" : "hidden" }}
      {...props}
    />
  );
};

export default memo(Icon);

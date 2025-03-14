import ContainerComponent from "components/apps/AppContainer";
import StyledVideoPlayer from "components/apps/VideoPlayer/StyledVideoPlayer";
import useVideoPlayer from "components/apps/VideoPlayer/useVideoPlayer";
import type { ComponentProcessProps } from "components/system/Apps/RenderComponent";

const VideoPlayer: FC<ComponentProcessProps> = ({ id }) =>
  ContainerComponent(
    id,
    useVideoPlayer,
    StyledVideoPlayer,
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video className="video-js vjs-big-play-centered" autoPlay />
  );

export default VideoPlayer;

import { useNavigate } from 'react-router-dom';

import { useVideoContext } from '../../contexts/video';
import { StyledButton } from '../Button/Button.styles';
import { Close } from '../Icons/Close';
import { Extern } from '../Icons/Extern';
import {
  StyledControls,
  StyledIframe,
  StyledIframeContainer,
} from './VideoPlayer.styles';

export function VideoPlayer() {
  const navigate = useNavigate();

  const { title, id, floating, setId, setPlaylist, playlist } = useVideoContext();
  // THis does not work ok, using this resets the video playback position when navigating back to the list
  // const showVideoControls = floating ? 0 : 1;
  const showVideoControls = 1;

  if (!id && (!playlist || playlist.length == 0)) return null;

  const isPlaylist = playlist && playlist.length > 0;
  return (
    <StyledIframeContainer
      $floating={floating}
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.05,
      }}
    >
      {floating && (
        <StyledControls>
          <StyledButton
            title={isPlaylist ? 'Go to playlist page' : 'Go to dedicated video page'}
            onClick={() => {
              navigate(isPlaylist ? `/playlist/${id}` : `/${id}`);
            }}
          >
            <Extern width={25} height={25} />
          </StyledButton>
          <StyledButton
            title="Close video"
            onClick={() => {
              if (setId) setId('');
              if (setPlaylist) setPlaylist(undefined);
            }}
          >
            <Close width={25} height={25} />
          </StyledButton>
        </StyledControls>
      )}
      <StyledIframe
        title={title}
        src={
          isPlaylist
            ? `https://www.youtube.com/embed/${id}?autoplay=1&playlist=${playlist.join(
                ',',
              )}&controls=${showVideoControls}`
            : `https://www.youtube.com/embed/${id}?controls=${showVideoControls}`
        }
        allowFullScreen
      />
    </StyledIframeContainer>
  );
}

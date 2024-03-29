import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import { StyledButton } from '../../../../components/Button/Button.styles';
import { Error } from '../../../../components/Error/Error';
import { Eye } from '../../../../components/Icons/Eye';
import { List } from '../../../../components/Icons/List';
import { Loading } from '../../../../components/Loading/Loading';
import { useVideoContext } from '../../../../contexts/video';
import AddToPlaylist from '../../../Playlists/application/AddToPlaylist/AddToPlaylist';
import { getVideoById } from '../../infrastructure/api';
import { StyledChannelName, StyledVideoTitle } from '../List/List.styles';
import { StyledControls, StyledDetailsContent, StyledViews } from './Details.styles';

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setId, setTitle, setFloating, setPlaylist } = useVideoContext();

  const { data, error, isLoading } = useQuery(
    ['video-details', id],
    () => (id ? getVideoById(id) : undefined),
    {
      enabled: !!id,
      retry: false,
    },
  );

  useEffect(() => {
    if (data) {
      if (setId) setId(data.videoId);
      if (setTitle) setTitle(data.title);
      if (setFloating) setFloating(false);
      if (setPlaylist) setPlaylist(undefined);
    }

    return () => {
      if (setFloating) setFloating(true);
    };
  }, [data]);

  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {data && (
        <StyledDetailsContent>
          <StyledControls>
            <StyledButton
              title="Go back to the list of videos"
              onClick={() => {
                navigate(-1);
              }}
              style={{
                width: 'fit-content',
              }}
            >
              <List width={25} height={25} />
            </StyledButton>
            <AddToPlaylist
              video={{
                id: data.videoId,
                name: data.title,
                url: data.url,
                thumbnailUrl: data.thumbnailUrl,
              }}
            />
          </StyledControls>
          <StyledVideoTitle>{data.title}</StyledVideoTitle>
          <StyledChannelName>{data.description}</StyledChannelName>
          <StyledViews>
            <Eye width={18} height={18} /> <p>{data.views}</p>{' '}
          </StyledViews>
        </StyledDetailsContent>
      )}
    </>
  );
}

export default Details;

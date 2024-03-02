import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import { StyledButton } from '../../../../components/Button.styles';
import { Error } from '../../../../components/Error/Error';
import { Loading } from '../../../../components/Loading/Loading';
import { useVideoContext } from '../../../../contexts/video';
import { Eye } from '../../../../Icons/Eye';
import { List } from '../../../../Icons/List';
import { getVideoById } from '../../infrastructure/api';
import { StyledChannelName, StyledVideoTitle } from '../List/List.styles';
import { StyledDetailsContent, StyledViews } from './Details.styles';

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setId, setTitle, setFloating } = useVideoContext();

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

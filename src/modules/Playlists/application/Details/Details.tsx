import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import { StyledButton } from '../../../../components/Button/Button.styles';
import ConfirmationModal from '../../../../components/ConfirmationModal/ConfirmationModal';
import { Error } from '../../../../components/Error/Error';
import { List } from '../../../../components/Icons/List';
import { Trash } from '../../../../components/Icons/Trash';
import { Loading } from '../../../../components/Loading/Loading';
import { useVideoContext } from '../../../../contexts/video';
import {
  StyledChannelName,
  StyledVideoTitle,
} from '../../../VideoPlayer/application/List/List.styles';
import {
  deletePlaylist,
  deleteVideoFromPlaylist,
  getPlaylistBySlug,
} from '../../infrastructure/api';
import {
  StyledControls,
  StyledDetailsContent,
  StyledImage,
  StyledVideoCard,
} from './Details.styles';

function Details() {
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);
  const [videoIdToDelete, setVideoIdToDelete] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setId, setPlaylist, setTitle, setFloating } = useVideoContext();
  const { data, isLoading } = useQuery(
    ['playlists-details', id],
    () => (id ? getPlaylistBySlug(id) : undefined),
    {
      retry: false,
    },
  );

  useEffect(() => {
    if (data) {
      if (setPlaylist) setPlaylist(data.videos.map((video) => video.id));
      if (setId) setId(data.slug);
      if (setTitle) setTitle(data.name);
      if (setFloating) setFloating(false);
    }

    return () => {
      if (setFloating) setFloating(true);
    };
  }, [data]);

  if (!id) {
    return <Error />;
  }

  if (isLoading || deleting) {
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
                navigate('/');
              }}
              style={{
                width: 'fit-content',
              }}
            >
              <List width={25} height={25} />
            </StyledButton>
            <StyledButton
              title="Delete this playlist"
              onClick={() => {
                setOpenDeleteConfirmation(true);
              }}
              style={{
                width: 'fit-content',
              }}
            >
              <Trash width={25} height={25} />
            </StyledButton>
          </StyledControls>
          <StyledVideoTitle>{data.name}</StyledVideoTitle>
          <StyledChannelName>{data.description}</StyledChannelName>
          {data.videos.map((video) => (
            <StyledVideoCard key={video.id}>
              <StyledImage src={video.thumbnailUrl} />
              <StyledVideoTitle>{video.name}</StyledVideoTitle>
              <StyledButton
                title="Delete this video"
                onClick={() => {
                  setVideoIdToDelete(video.id);
                }}
                style={{
                  width: 'fit-content',
                  marginLeft: 'auto',
                }}
              >
                <Trash width={25} height={25} />
              </StyledButton>
            </StyledVideoCard>
          ))}
        </StyledDetailsContent>
      )}
      <ConfirmationModal
        isOpen={openDeleteConfirmation}
        onClose={() => setOpenDeleteConfirmation(false)}
        onConfirm={() => {
          setDeleting(true);
          deletePlaylist(id)
            .then((res) => {
              if (res.success) {
                queryClient.invalidateQueries('playlists-list');
                if (setPlaylist) setPlaylist([]);
                if (setId) setId('');
                navigate('/');
              }
            })
            .finally(() => {
              setDeleting(false);
              setOpenDeleteConfirmation(false);
            });
        }}
        title={'Delete playlist'}
        message={'Are you sure you want to delete this playlist?'}
      />
      <ConfirmationModal
        isOpen={!!videoIdToDelete}
        onClose={() => setVideoIdToDelete(null)}
        onConfirm={() => {
          setDeleting(true);
          deleteVideoFromPlaylist(id, videoIdToDelete as string)
            .then((res) => {
              if (res.success) {
                queryClient.invalidateQueries('playlists-list');
                queryClient.invalidateQueries('playlists-details');
              }
            })
            .finally(() => {
              setDeleting(false);
              setVideoIdToDelete(null);
            });
        }}
        title={'Delete this video'}
        message={'Are you sure you want to delete this video?'}
      />
    </>
  );
}

export default Details;

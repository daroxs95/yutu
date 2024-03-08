import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { StyledButton } from '../../../../components/Button/Button.styles';
import Dialog from '../../../../components/Dialog/Dialog';
import { Add } from '../../../../components/Icons/Add';
import { Close } from '../../../../components/Icons/Close';
import { StyledInput } from '../../../../components/Input/Input.styles';
import { StyledSpinner } from '../../../../components/Loading/Loading.styles';
import { Playlist, Video } from '../../domain/types';
import {
  addVideoToPlaylist,
  createPlaylist,
  getPlaylists,
} from '../../infrastructure/api';
import {
  StyledListDescription,
  StyledListItem,
  StyledListText,
} from '../List/List.styles';
import {
  StyledForm,
  StyledModalDescription,
  StyledModalTitle,
} from './AddToPlaylist.styles';

function AddToPlaylist({ video }: { video: Video }) {
  const [open, setOpen] = useState(false);
  const [useNewPlaylist, setUseNewPlaylist] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [newPlaylistDescription, setNewPlaylistDescription] = useState('');
  const [selected, setSelected] = useState<Playlist[]>([]);
  const [updating, setUpdating] = useState(false);

  const queryClient = useQueryClient();
  const { data } = useQuery(['playlists-list'], () => getPlaylists(), {
    retry: false,
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUpdating(true);
    const promises = selected.map((playlist) => addVideoToPlaylist(playlist.slug, video));

    if (useNewPlaylist) {
      promises.push(
        createPlaylist(newPlaylistName, newPlaylistDescription, newPlaylistName, [video]),
      );
    }

    Promise.all(promises)
      .then(() => {
        setOpen(false);
        setNewPlaylistDescription('');
        setNewPlaylistName('');
        setSelected([]);
        setUseNewPlaylist(false);
      })
      .finally(() => {
        setUpdating(false);
        queryClient.invalidateQueries('playlists-list');
      });
  };

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <StyledButton
          title="Close"
          style={{ position: 'absolute', top: '10px', right: '10px' }}
          onClick={() => setOpen(false)}
        >
          <Close width={20} height={20} />
        </StyledButton>
        <StyledModalTitle>Add to playlist</StyledModalTitle>
        <StyledModalDescription>
          Choose multiple playlists to add this video to
        </StyledModalDescription>
        <StyledForm onSubmit={onSubmit}>
          {data
            ?.filter((item) => !item.videos.some((v) => v.id === video.id))
            .map((item, index) => (
              <StyledListItem
                type="button"
                className={selected.includes(item) ? 'selected' : ''}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 'auto',
                }}
                key={index}
                onClick={() => {
                  if (selected.includes(item)) {
                    setSelected(selected.filter((i) => i !== item));
                  } else {
                    setSelected([...selected, item]);
                  }
                }}
              >
                <StyledListDescription>{item.name}</StyledListDescription>
                <StyledListText>{item.description}</StyledListText>
              </StyledListItem>
            ))}
          {useNewPlaylist && (
            <StyledListItem
              type="button"
              className="selected"
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: 'auto',
              }}
            >
              <StyledInput
                type="text"
                placeholder="Playlist name"
                style={{ marginBottom: '1rem' }}
                value={newPlaylistName}
                onChange={(e) => setNewPlaylistName(e.target.value)}
              />
              <StyledInput
                type="text"
                placeholder="Playlist description"
                style={{ marginBottom: '1rem' }}
                value={newPlaylistDescription}
                onChange={(e) => setNewPlaylistDescription(e.target.value)}
              />
            </StyledListItem>
          )}
          <StyledButton
            type="button"
            title="Create new playlist"
            onClick={() => setUseNewPlaylist((prev) => !prev)}
          >
            Create new playlist
          </StyledButton>
          <StyledButton title="Save"> Save </StyledButton>
          {updating && (
            <StyledSpinner
              style={{
                margin: 'auto',
              }}
            />
          )}
        </StyledForm>
      </Dialog>
      <StyledButton
        title="Add to playlist"
        onClick={() => {
          setOpen(true);
        }}
        style={{
          width: 'fit-content',
        }}
      >
        <Add width={25} height={25} />
      </StyledButton>
    </>
  );
}

export default AddToPlaylist;

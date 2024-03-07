import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { Playlist } from '../../../../components/Icons/Playlist';
import { getPlaylists } from '../../infrastructure/api';
import {
  StyledList,
  StyledListDescription,
  StyledListItem,
  StyledListText,
  StyledListWrapper,
  StyledTray,
} from './List.styles';

function List() {
  const { data } = useQuery(['playlists-list'], () => getPlaylists(), {
    retry: false,
    keepPreviousData: true,
  });

  return (
    <>
      <StyledListWrapper>
        <StyledList>
          {data?.map((item, index) => (
            <Link key={index} to={`/playlist/${item.slug}`}>
              <StyledListItem onClick={() => console.log(item)}>
                <StyledListDescription>{item.name}</StyledListDescription>
                <StyledListText>{item.description}</StyledListText>
              </StyledListItem>
            </Link>
          ))}
        </StyledList>
        <StyledTray title="Playlists">
          <Playlist width={24} height={24} />
        </StyledTray>
      </StyledListWrapper>
    </>
  );
}

export default List;

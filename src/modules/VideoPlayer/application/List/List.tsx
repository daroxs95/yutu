import { AnimatePresence } from 'framer-motion';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { Error } from '../../../../components/Error/Error';
import { StyledInput } from '../../../../components/Input.styles';
import { Loading } from '../../../../components/Loading/Loading';
import useDebounced from '../../../../hooks/useDebounced';
import { useInput } from '../../../../hooks/useInput';
import { Search } from '../../../../Icons/Search';
import { getVideos } from '../../infrastructure/api';
import {
  StyledChannelName,
  StyledControlBar,
  StyledGrid,
  StyledImage,
  StyledVideoCard,
  StyledVideoTitle,
} from './List.styles';

function List() {
  const queryParams = new URLSearchParams(window.location.search);
  const queryValue = queryParams.get('query');
  const searchInput = useInput(queryValue ? decodeURIComponent(queryValue) : '');
  const debouncedInput = useDebounced(searchInput.value, 1000, (v) => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('query', encodeURIComponent(v));

    // Convert the modified search parameters back to a string
    const updatedQueryString = queryParams.toString();

    // Modify the browser history without navigating
    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}?${updatedQueryString}`,
    );
  });

  const { data, error, isFetching } = useQuery(
    ['videos-list', debouncedInput],
    () => (debouncedInput ? getVideos(debouncedInput) : undefined),
    {
      enabled: !!debouncedInput,
      retry: false,
      keepPreviousData: true,
    },
  );

  return (
    <>
      {isFetching && <Loading />}
      <StyledControlBar>
        <StyledInput
          style={{ width: '100%' }}
          placeholder="Type to search..."
          {...searchInput}
        />
        <Search width={20} height={20} style={{ position: 'absolute', right: '20px' }} />
      </StyledControlBar>
      {!!error && <Error />}
      {!error && (
        <AnimatePresence>
          <StyledGrid>
            {data?.map((i, index) => (
              <Link key={i.id.videoId} to={`/${i.id.videoId}`}>
                <StyledVideoCard
                  key={i.id.videoId + index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 20,
                    delay: index * 0.05,
                  }}
                >
                  <StyledImage alt="" src={i.snippet.thumbnails.url} />
                  <StyledVideoTitle>{i.title}</StyledVideoTitle>
                  <StyledChannelName>{i.channelName}</StyledChannelName>
                </StyledVideoCard>
              </Link>
            ))}
          </StyledGrid>
        </AnimatePresence>
      )}
    </>
  );
}

export default List;

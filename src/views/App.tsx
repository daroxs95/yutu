import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { StyledContent } from '../components/Layout.styles';
import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer';
import { VideoProvider } from '../contexts/video';
import PlaylistDetails from '../modules/Playlists/application/Details/Details';
import Playlists from '../modules/Playlists/application/List/List';
import Details from '../modules/VideoPlayer/application/Details/Details';
import List from '../modules/VideoPlayer/application/List/List';
import { theme } from '../styles/theme';
import { StyledGlobal } from './App.styles';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledGlobal />
      <QueryClientProvider client={queryClient}>
        <StyledContent>
          <VideoProvider>
            <BrowserRouter>
              <VideoPlayer />
              <Playlists />
              <Routes>
                <Route path="/" element={<List />} />
                <Route path="/playlist/:id" element={<PlaylistDetails />} />
                <Route path="/:id" element={<Details />} />
              </Routes>
            </BrowserRouter>
          </VideoProvider>
        </StyledContent>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

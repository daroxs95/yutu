import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

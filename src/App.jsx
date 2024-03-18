import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
// import SideBar from '@components/SideBar/SideBar';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';
import chakraTheme from '@styles/chakraTheme';
import AuthProvider from './provider/AuthProvider';
import { Outlet } from 'react-router-dom';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ChakraProvider theme={chakraTheme}>
          <GlobalStyle />
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <AuthProvider>
              <DndProvider backend={HTML5Backend}>
                <Outlet />
              </DndProvider>
            </AuthProvider>
          </QueryClientProvider>
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

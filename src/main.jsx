import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import UserProvider from './context/UserContext';
import CursosProvider from './context/CursosContext';
import FavoritesProvider from './context/FavoritesContext';

import App from './App';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { CssBaseline, Container } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CursosProvider>
          <FavoritesProvider>
            <CssBaseline />
            <Navbar />
              <Container maxWidth="lg">
                <App />
              </Container>
            <Footer />
          </FavoritesProvider>
        </CursosProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);



import { BrowserRouter, Route, Routes } from 'react-router-dom';

import type { Offer } from '../types/offer';

import { MainPage } from '../Pages/main-page/main-page';
import { LoginPage } from '../Pages/login-page/login-page';
import { FavoritesPage } from '../Pages/favorites-page/favorites-page';
import { OfferPage } from '../Pages/offer-page/offer-page';
import { NotFoundPage } from '../Pages/not-found-page/not-found-page';
import { PrivateRoute } from '../components/private-route/private-route';

type AppProps = {
  offers: Offer[];
};

function App({ offers }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainPage offers={offers} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute isAuthorized={false}>
              <FavoritesPage offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path="/offer/:id" element={<OfferPage offers={offers} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainPage } from '../Pages/main-page/main-page';
import { LoginPage } from '../Pages/login-page/login-page';
import { FavoritesPage } from '../Pages/favorites-page/favorites-page';
import { OfferPage } from '../Pages/offer-page/offer-page';
import { NotFoundPage } from '../Pages/not-found-page/not-found-page';
import { PrivateRoute } from '../components/private-route/private-route';

type AppProps = {
  offersCount: number;
};

function App(props: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainPage offersCount={props.offersCount} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/favorites" element={
          <PrivateRoute isAuthorized={false}>
            <FavoritesPage />
          </PrivateRoute>
        }
        />
        <Route path="/offer/:id" element={<OfferPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };

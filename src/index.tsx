import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, unstable_HistoryRouter as HistoryRouter, Navigate } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Home from './pages/Home/Home';
import HomeTemplate from './templates/HomeTemplate';
import Login from './pages/Login/Login';
import Details from './pages/Details/Details';
import Carts from './pages/Carts/Carts';
import Register from './pages/Register/Register';
import Search from 'antd/es/transfer/search';
import Profile from './pages/Profile/Profile';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//chuyen huong trang o file khong phai component
export const history: any = createBrowserHistory();

root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='detail'>
            <Route path=':id' element={<Details />}></Route>
          </Route>
          <Route path='carts' element={<Carts />} />
          <Route path='register' element={<Register />} />
          <Route path='search' element={<Search />} />
          <Route path='profile' element={<Profile />} />
          <Route path='*' element={<Navigate to="" />} />
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

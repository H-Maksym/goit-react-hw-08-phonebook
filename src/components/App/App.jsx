import { useEffect /* , lazy */ } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import UserMenu from 'pages/UserMenu';
import { RestrictedRoute } from 'components/App/RestricrtedRoute';
import { PrivateRoute } from 'components/App/PrivateRoute';
import useAuth from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';

// const Home = lazy(() => import('pages/Home'));
// const Login = lazy(() => import('pages/Login'));
// const Register = lazy(() => import('pages/Register'));
// const UserMenu = lazy(() => import('pages/UserMenu'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <RestrictedRoute redirectTo="/usermenu" component={<Home />} />
        }
      />
      <Route
        path="login"
        element={
          <RestrictedRoute redirectTo="/usermenu" component={<Login />} />
        }
      />

      <Route
        path="register"
        element={
          <RestrictedRoute redirectTo="/usermenu" component={<Register />} />
        }
      />

      <Route
        path="usermenu"
        element={<PrivateRoute redirectTo="/" component={<UserMenu />} />}
      />
      {/* <Ro`ute path="Contacts" element={<Contacts />} /> */}
    </Routes>
  );
}

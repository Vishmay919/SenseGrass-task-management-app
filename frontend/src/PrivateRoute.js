import { Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const PrivateRoute = ({ element, ...rest }) => {
  const [cookies] = useCookies(['token']);
  const token = cookies.token;

  return (
    <Route
      {...rest}
      element={token ? element : <Navigate to="/login" replace />}
    />
  );
};

export default PrivateRoute
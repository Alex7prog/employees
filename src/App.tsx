import { FC } from 'react';
import Employees from './features/Employees';

import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Employees />;
      </Provider>
    </BrowserRouter>
  );
};

export default App;

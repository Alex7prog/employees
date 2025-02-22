import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '@redux/store';
import Employees from '@features/Employees/';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Employees />
      </Provider>
    </BrowserRouter>
  );
};

export default App;

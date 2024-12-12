import { FC } from 'react';

import HeaderSearch from './components/HeaderSearch';
import HeaderNavigation from './components/HeaderNavigation';

import './index.scss';

const Header: FC = () => {
  return (
    <header className="header">
      <h2 className="header__title">Search</h2>
      <HeaderSearch />
      <HeaderNavigation />
    </header>
  );
};

export default Header;

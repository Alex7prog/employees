import { FC } from 'react';

import HeaderSearch from './headerSearch/HeaderSearch';
import HeaderNavigation from './headerNavigation/HeaderNavigation';

import './header.scss';

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

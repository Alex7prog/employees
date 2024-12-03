import { FC } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';

import './header-navigation.scss';

const navigationLinks = [
  { nav: 'All', rout: '/' },
  { nav: 'Designers', rout: '/designer' },
  { nav: 'Analysts', rout: '/analyst' },
  { nav: 'Managers', rout: '/manager' },
  { nav: 'iOS', rout: '/ios' },
  { nav: 'Android', rout: '/android' },
];

const setActive = ({ isActive }: { isActive: boolean }): string =>
  isActive ? 'header__navigation-link header__navigation-link_active' : 'header__navigation-link';

const HeaderNavigation: FC = () => {
  const [searchParams] = useSearchParams();

  const urlParams = `?${searchParams.toString()}`;

  return (
    <nav className="header__navigation">
      <ul className="header__navigation-list">
        {navigationLinks.map(nl => (
          <li key={nl.nav} className="header__navigation-item">
            <NavLink className={setActive} to={`${nl.rout}${urlParams}`}>
              {nl.nav}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;

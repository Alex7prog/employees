import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import './index.scss';

const navigationLinks = [
  { nav: 'All', param: 'all' },
  { nav: 'Designers', param: 'designer' },
  { nav: 'Analysts', param: 'analyst' },
  { nav: 'Managers', param: 'manager' },
  { nav: 'iOS', param: 'ios' },
  { nav: 'Android', param: 'android' },
];

const PositionTabs: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleParams = (param: string) => {
    if (param == 'all') {
      if (searchParams.get('position')) {
        setSearchParams(params => {
          params.delete('position');
          return params;
        });
      }

      return;
    }

    setSearchParams(params => {
      params.set('position', param);
      return params;
    });
  };

  const setActive = (param: string): string => {
    if (param === 'all' && !searchParams.get('position')) {
      return 'filter__tabs-position__link filter__tabs-position__link_active';
    }

    return param === searchParams.get('position')
      ? 'filter__tabs-position__link filter__tabs-position__link_active'
      : 'filter__tabs-position__link';
  };

  return (
    <div className="filter__tabs">
      <ul className="filter__tabs-position">
        {navigationLinks.map(nl => (
          <li key={nl.nav} className={setActive(nl.param)} onClick={() => handleParams(nl.param)}>
            {nl.nav}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PositionTabs;

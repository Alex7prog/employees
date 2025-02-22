import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { navigationLinks } from './configs';

import './index.scss';

const PositionTabs: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleParams = (param: string) => {
    setSearchParams(params => {
      if (param === 'all') {
        params.delete('position');
        return params;
      }

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

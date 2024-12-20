import { FC } from 'react';

import SearchInput from './components/SearchInput';
import PositionTabs from './components/PositionTabs';

import './index.scss';

const Filter: FC = () => {
  return (
    <div className="filter">
      <h2 className="filter__title">Search</h2>
      <SearchInput />
      <PositionTabs />
    </div>
  );
};

export default Filter;

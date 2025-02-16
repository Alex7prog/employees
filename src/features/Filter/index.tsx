import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchInput from './components/SearchInput';
import PositionTabs from './components/PositionTabs';
import SortDialog from './components/SortDialog';

import './index.scss';

const Filter: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isSortDialogActive, setSortDialogActive] = useState(false);

  const toggleSortDialogActive = () => {
    setSortDialogActive(!isSortDialogActive);
  };

  useEffect(() => {
    if (!searchParams.get('sort')) {
      setSearchParams(params => {
        params.set('sort', 'alphabet');
        return params;
      });
    }
  }, []);

  return (
    <div className="filter">
      <h2 className="filter__title">Search</h2>
      <SearchInput toggleDialogActive={toggleSortDialogActive} />
      <PositionTabs />
      {isSortDialogActive && <SortDialog toggleDialogActive={toggleSortDialogActive} />}
    </div>
  );
};

export default Filter;

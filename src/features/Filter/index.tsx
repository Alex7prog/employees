import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchInput from '@features/Filter/components/SearchInput';
import PositionTabs from '@features/Filter/components/PositionTabs';
import SortDialog from '@features/Filter/components/SortDialog';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

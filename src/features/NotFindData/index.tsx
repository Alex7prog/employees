import { FC } from 'react';

import './index.scss';

const NotFindData: FC = () => {
  return (
    <div className="notfind-data">
      <img className="notfind-data__img" src="/images/img/magnifying-glass.png" alt="" />
      <div className="notfind-data__msg-one">We did not find anyone</div>
      <div className="notfind-data__msg-two">Try to adjust your request</div>
    </div>
  );
};

export default NotFindData;

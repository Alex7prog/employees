import { FC } from 'react';
import magnifierImg from '../../images/img/magnifying-glass.png';

import './not-find-data.scss';

const NotFindData: FC = () => {
  return (
    <div className="notfind-data">
      <img className="notfind-data__img" src={magnifierImg} alt="" />
      <div className="notfind-data__msg-one">We did not find anyone</div>
      <div className="notfind-data__msg-two">Try to adjust your request</div>
    </div>
  );
};

export default NotFindData;

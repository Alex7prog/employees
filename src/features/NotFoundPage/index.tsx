import { FC } from 'react';

import './index.scss';

const NotFoundPage: FC = () => {
  return (
    <div className="notfound-page">
      <img className="notfound-page__img" src="/images/img/magnifying-glass.png" alt="" />
      <div className="notfound-page__msg-one">This page was not found</div>
      <div className="notfound-page__msg-two">Use the correct page url</div>
    </div>
  );
};

export default NotFoundPage;

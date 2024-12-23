import { FC } from 'react';

import './index.scss';

const ErrorInfo: FC = () => {
  return (
    <div className="error-info">
      <img className="error-info__img" src="/images/img/ufo.png" alt="" />
      <div className="error-info__msg-one">Unexpected error occurred...</div>
      <div className="error-info__msg-two">Try again a bit later</div>
      <div className="error-info__msg-three">Reload page</div>
    </div>
  );
};

export default ErrorInfo;

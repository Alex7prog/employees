import { FC } from 'react';

import './index.scss';

const EmployeeSkeleton: FC = () => {
  return (
    <ul className="employee-list">
      <li className="employee-card">
        <div className="employee-card__avatar employee-card__avatar_skeleton"></div>
        <div className="employee-card__info employee-card__info_skeleton">
          <div className="employee-card__name employee-card__name_skeleton"></div>
          <div className="employee-card__position employee-card__position_skeleton"></div>
        </div>
      </li>
      <li className="employee-card">
        <div className="employee-card__avatar employee-card__avatar_skeleton"></div>
        <div className="employee-card__info employee-card__info_skeleton">
          <div className="employee-card__name employee-card__name_skeleton"></div>
          <div className="employee-card__position employee-card__position_skeleton"></div>
        </div>
      </li>
      <li className="employee-card">
        <div className="employee-card__avatar employee-card__avatar_skeleton"></div>
        <div className="employee-card__info employee-card__info_skeleton">
          <div className="employee-card__name employee-card__name_skeleton"></div>
          <div className="employee-card__position employee-card__position_skeleton"></div>
        </div>
      </li>
      <li className="employee-card">
        <div className="employee-card__avatar employee-card__avatar_skeleton"></div>
        <div className="employee-card__info employee-card__info_skeleton">
          <div className="employee-card__name employee-card__name_skeleton"></div>
          <div className="employee-card__position employee-card__position_skeleton"></div>
        </div>
      </li>
    </ul>
  );
};

export default EmployeeSkeleton;

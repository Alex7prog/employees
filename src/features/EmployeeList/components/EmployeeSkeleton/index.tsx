import { FC } from 'react';

import './index.scss';

const EmployeeSceleton: FC = () => {
  return (
    <div>
      <li className="employee employee_sceleton">
        <div className="employee__avatar employee__avatar_sceleton"></div>
        <div className="employee__info employee__info_sceleton">
          <div className="employee__name employee__name_sceleton"></div>
          <div className="employee__position employee__position_sceleton"></div>
        </div>
      </li>
      <li className="employee employee_sceleton">
        <div className="employee__avatar employee__avatar_sceleton"></div>
        <div className="employee__info employee__info_sceleton">
          <div className="employee__name employee__name_sceleton"></div>
          <div className="employee__position employee__position_sceleton"></div>
        </div>
      </li>
      <li className="employee employee_sceleton">
        <div className="employee__avatar employee__avatar_sceleton"></div>
        <div className="employee__info employee__info_sceleton">
          <div className="employee__name employee__name_sceleton"></div>
          <div className="employee__position employee__position_sceleton"></div>
        </div>
      </li>
      <li className="employee employee_sceleton">
        <div className="employee__avatar employee__avatar_sceleton"></div>
        <div className="employee__info employee__info_sceleton">
          <div className="employee__name employee__name_sceleton"></div>
          <div className="employee__position employee__position_sceleton"></div>
        </div>
      </li>
    </div>
  );
};

export default EmployeeSceleton;

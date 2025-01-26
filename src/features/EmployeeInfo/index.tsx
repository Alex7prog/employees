import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/storeHooks';

import NotFoundPage from '../NotFoundPage';

import './index.scss';

const EmployeeInfo: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const employeesList = useAppSelector(state => state.employees.employeesList);

  const [employee] = employeesList.filter(employee => employee.id === id);

  if (!employee) {
    return <NotFoundPage />;
  }

  const goBack = () => navigate(-1);

  const birthDate = new Date(employee.birthDate);
  const employeeAge = new Date().getFullYear() - new Date(employee.birthDate).getFullYear();

  return (
    <div className="employee-info">
      <div className=" employee-content">
        <div className="employee-content__btn-panel">
          <img
            className="employee-content__back-btn"
            src="/images/icons/back-icon.svg"
            alt=""
            onClick={goBack}
          />
        </div>
        <div className="employee-content__base">
          <img className="employee-content__avatar" src={employee.avatar} alt="" />
          <div className="employee-content__name">
            {employee.name}
            <span className="employee-content__tag">{employee.tag}</span>
          </div>
          <div className="employee-content__position">{employee.position}</div>
        </div>
      </div>
      <div className="employee-content__add">
        <div className="employee-content__date">
          <img src="/images/icons/star-icon.svg" alt="" />
          <span className="employee-content__date-birthday">
            {birthDate.toLocaleString('ru', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span className="employee-content__date-age">{`${employeeAge} лет`}</span>
        </div>
        <div className="employee-content__phone">
          <img src="/images/icons/handset-icon.svg" alt="" />
          <span className="employee-content__phone-number">{employee.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeInfo;

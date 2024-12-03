import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/storeHooks';

import NotFoundPage from '../notFoundPage/NotFoundPage';

import backIcon from '../../images/icons/back-icon.svg';
import handsetIcon from '../../images/icons/handset-icon.svg';
import starIcon from '../../images/icons/star-icon.svg';

import './employee-profile.scss';

const EmployeeProfile: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const employeesList = useAppSelector(state => state.employees.employeesList);

  if (!Number(id) && !Number.isInteger(id) && !(Number(id) > 0)) {
    return <NotFoundPage />;
  }

  const [employee] = employeesList.filter(employee => employee.id === id);

  if (!employee) {
    return <NotFoundPage />;
  }
  const goBack = () => navigate(-1);

  const birthDate = new Date(employee.birthDate);
  const employeeAge = new Date().getFullYear() - new Date(employee.birthDate).getFullYear();

  return (
    <div className="employee-profile">
      <div className=" employee-info">
        <div className="employee-info__btn-panel">
          <img className="employee-info__back-btn" src={backIcon} alt="" onClick={goBack} />
        </div>
        <div className="employee-info__base">
          <img className="employee-info__avatar" src={employee.avatar} alt="" />
          <div className="employee-info__name">
            {employee.name}
            <span className="employee-info__tag">{employee.tag}</span>
          </div>
          <div className="employee-info__position">{employee.position}</div>
        </div>
      </div>
      <div className="employee-info__add">
        <div className="employee-info__date">
          <img src={starIcon} alt="" />
          <span className="employee-info__date-birthday">
            {birthDate.toLocaleString('ru', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}{' '}
          </span>
          <span className="employee-info__date-age">{`${employeeAge} лет`}</span>
        </div>
        <div className="employee-info__phone">
          <img src={handsetIcon} alt="" />
          <span className="employee-info__phone-number">{employee.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;

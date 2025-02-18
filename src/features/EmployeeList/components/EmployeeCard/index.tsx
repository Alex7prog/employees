import { FC } from 'react';
import { Link } from 'react-router-dom';

import type { Employee } from '@entities/employee/types';

import './index.scss';

type EmployeeCardProps = Employee & { showBirthDate: boolean };

const EmployeeCard: FC<EmployeeCardProps> = ({
  showBirthDate,
  id,
  avatar,
  name,
  position,
  tag,
  birthDate,
}) => {
  return (
    <Link className="employee-card-link" to={`/employees/${id}`}>
      <li className="employee-card">
        <img className="employee-card__avatar" src={avatar} alt="avatar" />
        <div className="employee-card__info">
          <div className="employee-card__name">
            {name}
            <span className="employee-card__tag">{tag}</span>
          </div>
          <div className="employee-card__position">{position}</div>
        </div>
        {showBirthDate && (
          <div className="employee-card__birth-date">
            {new Date(birthDate).toLocaleString('en-GB', {
              day: 'numeric',
              month: 'short',
            })}
          </div>
        )}
      </li>
    </Link>
  );
};

export default EmployeeCard;

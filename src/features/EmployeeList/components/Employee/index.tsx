import { FC } from 'react';
import { Link } from 'react-router-dom';

import type { Employee as EmployeeType } from '../../../../entities/types';

import './index.scss';

const Employee: FC<EmployeeType> = ({ id, avatar, name, position, tag }) => {
  return (
    <Link className="employee-link" to={`/employees/${id}`}>
      <li className="employee">
        <img className="employee__avatar" src={avatar} alt="avatar" />
        <div className="employee__info">
          <div className="employee__name">
            {name}
            <span className="employee__tag">{tag}</span>
          </div>
          <div className="employee__position">{position}</div>
        </div>
      </li>
    </Link>
  );
};

export default Employee;

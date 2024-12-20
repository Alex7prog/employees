import { FC } from 'react';
import { useEmployees } from '../../hooks/useEmployees';

import EmployeeCard from './components/EmployeeCard';
import EmployeeSkeleton from './components/EmployeeSkeleton';
import ErrorInfo from '../ErrorInfo';
import NotFindData from '../NotFindData';

import './index.scss';

const EmployeeList: FC = () => {
  const { employeesList, status, employeesListSortByBirthDate, isSortByBirthDate } = useEmployees();

  if (status === 'rejected' || status === 'error') {
    return <ErrorInfo />;
  }

  return (
    <>
      {status === 'loading' && <EmployeeSkeleton />}
      {status === 'resolved' && !employeesList.length && <NotFindData />}
      {status === 'resolved' && employeesList.length > 0 && !isSortByBirthDate && (
        <ul className="employee-list">
          {employeesList.map(employee => (
            <EmployeeCard key={employee.id} showBirthDate={false} {...employee} />
          ))}
        </ul>
      )}
      {status === 'resolved' &&
        Object.keys(employeesListSortByBirthDate).length > 0 &&
        isSortByBirthDate && (
          <ul className="employee-list">
            {Object.keys(employeesListSortByBirthDate).map(year => (
              <li key={year}>
                <div className="employee-list__divider">
                  <span className="employee-list__divider-year">{year}</span>
                </div>
                <ul>
                  {employeesListSortByBirthDate[year].map(employee => (
                    <EmployeeCard key={employee.id} showBirthDate={true} {...employee} />
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
    </>
  );
};

export default EmployeeList;

import { FC } from 'react';
import { useEmployees } from '../../hooks/useEmployees';

import Employee from './components/Employee';
import EmployeeSceleton from './components/EmployeeSkeleton';
import ErrorInfo from '../ErrorInfo';
import NotFindData from '../NotFindData';

import './index.scss';

const EmployeeList: FC = () => {
  const { employeesList, status } = useEmployees();

  if (status === 'rejected' || status === 'error') {
    return <ErrorInfo />;
  }

  return (
    <>
      {status === 'loading' && <EmployeeSceleton />}
      {status === 'resolved' && !employeesList.length && <NotFindData />}
      {status === 'resolved' && employeesList.length > 0 && (
        <ul className="employee-list">
          {employeesList.map(employee => (
            <Employee key={employee.id} {...employee} />
          ))}
        </ul>
      )}
    </>
  );
};

export default EmployeeList;

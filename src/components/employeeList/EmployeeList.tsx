import { FC } from 'react';
import { useEmployees } from '../../hooks/useEmployees';

import Employee from './employee/Employee';
import EmployeeSceleton from './employeeSkeleton/EmployeeSceleton';
import ErrorInfo from '../errorInfo/ErrorInfo';
import NotFindData from '../notFindData/NotFindData';

import './employee-list.scss';

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

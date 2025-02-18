import { FC, useMemo } from 'react';
import { useEmployees } from '@hooks/useEmployees';

import type { Employee } from '@entities/employee/types';

import EmployeeCard from '@features/EmployeeList/components/EmployeeCard';
import EmployeeSkeleton from '@features/EmployeeList/components/EmployeeSkeleton';
import ErrorInfo from '@features/ErrorInfo';
import NotFindData from '@features/NotFindData';

import './index.scss';

const EmployeeList: FC = () => {
  const [employeesList, status, sortParam] = useEmployees();

  const employeesListByBirthDate = useMemo(
    () =>
      Object.entries(
        employeesList.reduce((acc: { [key: string]: Employee[] }, employee) => {
          const year = new Date(employee.birthDate).getFullYear().toString();
          acc[year] ??= [];
          acc[year].push(employee);
          return acc;
        }, {}),
      ),
    [employeesList],
  );

  if (status === 'rejected' || status === 'error') {
    return <ErrorInfo />;
  }

  return (
    <>
      {status === 'loading' && <EmployeeSkeleton />}
      {status === 'resolved' && (
        <>
          {!employeesList.length && <NotFindData />}
          {employeesList.length > 0 && sortParam === 'alphabet' && (
            <ul className="employee-list">
              {employeesList.map(employee => (
                <EmployeeCard key={employee.id} showBirthDate={false} {...employee} />
              ))}
            </ul>
          )}
          {employeesListByBirthDate.length > 0 && sortParam === 'birthday' && (
            <ul className="employee-list">
              {employeesListByBirthDate.map(([year, employees]) => (
                <li key={year}>
                  <div className="employee-list__divider">
                    <span className="employee-list__divider-year">{year}</span>
                  </div>
                  <ul>
                    {employees.map(employee => (
                      <EmployeeCard key={employee.id} showBirthDate={true} {...employee} />
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
};

export default EmployeeList;

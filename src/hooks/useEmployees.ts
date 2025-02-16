import { useSearchParams } from 'react-router-dom';
import type { Employee } from '../entities/employee/types';
import { useAppSelector } from './storeHooks';

const useEmployees = (): [Employee[], string, string] => {
  const { employeesList, status } = useAppSelector(state => state.employees);
  const [searchParams] = useSearchParams();

  const { position = '', filter = '', sort = '' } = Object.fromEntries(searchParams.entries());

  const filteredEmployeesList = employeesList
    .filter(employee => (position ? employee.position === position : true))
    .filter(employee =>
      filter
        ? employee.name.toLowerCase().includes(filter.toLowerCase()) ||
          employee.email.includes(filter) ||
          employee.tag.includes(filter)
        : true,
    )
    .sort((a, b) =>
      sort === 'alphabet' ? a.name.localeCompare(b.name) : a.birthDate - b.birthDate,
    );

  return [filteredEmployeesList, status, sort];
};

export { useEmployees };

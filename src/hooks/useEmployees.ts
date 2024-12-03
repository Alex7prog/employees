import { useLocation, useSearchParams } from 'react-router-dom';
import { useAppSelector } from './storeHooks';

const useEmployees = () => {
  const { employeesList, status } = useAppSelector(state => state.employees);

  const location = useLocation();
  const [searchParams] = useSearchParams();

  const filterParam = searchParams.get('filter') || '';
  const sortParam = searchParams.get('sort') || '';

  let filteredList = [];
  const employeePosition = location.pathname.slice(1);

  try {
    filteredList = !employeePosition
      ? [...employeesList]
      : employeesList.filter(employee => employee.position === location.pathname.slice(1));

    if (filterParam) {
      filteredList = filteredList.filter(
        employee =>
          employee.name.toLowerCase().includes(filterParam.toLowerCase()) ||
          employee.email.includes(filterParam) ||
          employee.tag.includes(filterParam),
      );
    }

    if (sortParam) {
      if (sortParam === 'alphabet') {
        filteredList = [...filteredList].sort((a, b) => a.name.localeCompare(b.name));
      }

      if (sortParam === 'birthday') {
        filteredList = [...filteredList].sort((a, b) => b.birthDate - a.birthDate);
      }
    }
  } catch (error) {
    return {
      employeesList: [],
      status: 'error',
      error: (error as Error).message,
    };
  }

  return {
    employeesList: filteredList,
    status: status,
    error: '',
  };
};

export { useEmployees };

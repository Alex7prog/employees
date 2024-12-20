import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from './storeHooks';
import { Employee } from '../entities/employee/types';

const useEmployees = () => {
  const { employeesList, status } = useAppSelector(state => state.employees);
  const [searchParams] = useSearchParams();

  const positionParam = searchParams.get('position') || '';
  const filterParam = searchParams.get('filter') || '';
  const sortParam = searchParams.get('sort') || '';

  let filteredList = [];
  let sortedListByBirthDate: { [key: string]: Employee[] } = {};

  const isSortByBirthDate = sortParam === 'birthday' ? true : false;

  try {
    filteredList = !positionParam
      ? [...employeesList]
      : employeesList.filter(employee => employee.position === positionParam);

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
        sortedListByBirthDate = [...filteredList]
          .sort((a, b) => a.birthDate - b.birthDate)
          .reduce((acc: { [key: string]: Employee[] }, el) => {
            const year = new Date(el.birthDate).getFullYear();
            acc[`${year}`] ??= [];
            acc[`${year}`].push(el);
            return acc;
          }, {});
      }
    }
  } catch (error) {
    return {
      employeesList: [],
      status: 'error',
      employeesListSortByBirthDate: {},
      isSortByBirthDate,
      error: (error as Error).message,
    };
  }

  return {
    employeesList: filteredList,
    status,
    employeesListSortByBirthDate: sortedListByBirthDate,
    isSortByBirthDate,
    error: '',
  };
};

export { useEmployees };

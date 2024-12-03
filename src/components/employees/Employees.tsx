import { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/storeHooks';
import { fetchEmployees } from '../../store/employeesSlice';

import Layout from '../layout/Layout';
import EmployeeList from '../employeeList/EmployeeList';
import EmployeeProfile from '../employeeProfile/EmployeeProfile';
import NotFoundPage from '../notFoundPage/NotFoundPage';

import './employees.scss';

const Employees: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <section className="employees container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EmployeeList />} />
          <Route path="designer" element={<EmployeeList />} />
          <Route path="analyst" element={<EmployeeList />} />
          <Route path="manager" element={<EmployeeList />} />
          <Route path="ios" element={<EmployeeList />} />
          <Route path="android" element={<EmployeeList />} />
        </Route>
        <Route path="/employees/:id" element={<EmployeeProfile />} />
        <Route path="/notfoundpage" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </section>
  );
};

export default Employees;

import { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { fetchEmployees } from '@entities/employee/gateways';
import { useAppDispatch } from '@hooks/storeHooks';

import Layout from '@layout/index';
import EmployeeList from '@features/EmployeeList';
import EmployeeInfo from '@features/EmployeeInfo';
import NotFoundPage from '@features/NotFoundPage';

import './index.scss';

const Employees: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <section className="employees-page container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EmployeeList />} />
        </Route>
        <Route path="/employees/:id" element={<EmployeeInfo />} />
        <Route path="/notfoundpage" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </section>
  );
};

export default Employees;

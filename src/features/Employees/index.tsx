import { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/storeHooks';
import { fetchEmployees } from '../../entities/employee/gateways';

import Layout from '../Layout';
import EmployeeList from '../EmployeeList';
import EmployeeInfo from '../EmployeeInfo';
import NotFoundPage from '../NotFoundPage';

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

import { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/storeHooks';
import { fetchEmployees } from '../../entities/gateways';

import Layout from '../Layout';
import EmployeeList from '../EmployeeList';
import EmployeeProfile from '../EmployeeProfile';
import NotFoundPage from '../NotFoundPage';

import './index.scss';

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

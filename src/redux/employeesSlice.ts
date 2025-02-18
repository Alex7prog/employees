import { createSlice } from '@reduxjs/toolkit';
import type { Employee } from '@entities/employee/types';
import { fetchEmployees } from '@entities/employee/gateways';

type EmployeesState = {
  employeesList: Employee[];
  status: string;
  error: string;
};

const initialState: EmployeesState = {
  employeesList: [],
  status: '',
  error: '',
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchEmployees.pending, state => {
      state.status = 'loading';
      state.error = '';
    });
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.employeesList = action.payload;
      state.status = 'resolved';
      state.error = '';
    });
    builder.addCase(fetchEmployees.rejected, (state, action) => {
      state.status = 'rejected';
      state.employeesList = [];

      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = '';
      }
    });
  },
});

export default employeesSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import type { Employee } from '../types/data';

const SERVER_URL = 'https://66a0f8b17053166bcabd894e.mockapi.io/api/workers';

type EmployeesState = {
  employeesList: Employee[];
  status: string;
  error: string;
};

export const fetchEmployees = createAsyncThunk<Employee[], undefined, { rejectValue: string }>(
  'employees/fetchEmployees',
  async function (_, { rejectWithValue }) {
    const response = await fetch(SERVER_URL);

    if (!response.ok) {
      return rejectWithValue('fetch Error/server Error!');
    }

    const data = await response.json();
    return data;
  },
);

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

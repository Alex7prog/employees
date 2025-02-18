import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Employee } from '@entities/employee/types';

const SERVER_URL = 'https://66a0f8b17053166bcabd894e.mockapi.io/api/workers';

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

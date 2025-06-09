import { createAsyncThunk } from '@reduxjs/toolkit';
import User from '../../../models/User';
import authService from '../../../services/auth.service';
import { updateMessage, userUpdate, getUserInfoAction } from './loginSlice';

export const loginAction = createAsyncThunk(
  'user/login',
  async (user: User, { rejectWithValue, dispatch }) => {
    const successCallback = (res: any) => {
      dispatch(userUpdate(res.data.data));
      dispatch(updateMessage({ status: true }));
      dispatch(getUserInfoAction({} as User));
      return res.data;
    };
    if (user.admin) {
      return authService
        .loginAdmin(user)
        .then(successCallback)
        .catch((e) => {
          return rejectWithValue(e.response.data.message);
        });
    }
    return authService
      .login(user)
      .then(successCallback)
      .catch((e) => {
        return rejectWithValue(e.response.data.message);
      });
  }
);

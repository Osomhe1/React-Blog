import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../Feature/UserSlice';

export default configureStore({
    reducer:{
        user:userReducer,
    },
});
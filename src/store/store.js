import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/users'

const store=configureStore({
    reducer:{
        user:userReducer,
    },
})

export default store
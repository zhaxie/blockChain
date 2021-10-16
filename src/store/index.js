

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './components/counterSlice'
import check from './components/check'
import user from './components/user'
import acount from './components/acount'

export default configureStore({
  reducer: {
    counter: counterReducer,
    check,
    user,
    acount,
  },
})


import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './components/counterSlice'
import check from './components/check'

export default configureStore({
  reducer: {
    counter: counterReducer,
    check: check,
  },
})
import { createSlice } from '@reduxjs/toolkit'

export const user = createSlice({
  name: 'user',
  initialState: {
    userInfoObj: {},
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfoObj = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserInfo } = user.actions

export default user.reducer
import { createSlice } from '@reduxjs/toolkit'

export const check = createSlice({
  name: 'check',
  initialState: {
    toCheckList: [],
  },
  reducers: {
    addCheck: (state, action) => {
      state.toCheckList.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCheck } = check.actions

export default check.reducer
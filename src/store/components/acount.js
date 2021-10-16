
import { createSlice } from '@reduxjs/toolkit'
import MD5 from 'MD5'

export const acount = createSlice({
    name: 'acount',
    initialState: {
        acounts: {},
    },
    reducers: {
        add: (state, action) => {
            console.info('action', action)
            const { payload } = action

            state.acounts[payload] = [{
                sliceName: 'Dreamkey',
                algorithmType: MD5(`algorithmType${payload}0`),
                blockHeight: MD5(`blockHeight${payload}0`),
                algorithmHash: MD5(`algorithmHash${payload}0`),
                creatAddress: MD5(payload + 0),
                createdAt: '2021-10-14 19:40:59',
            }, {
                sliceName: 'Dreamkey',
                algorithmType: MD5(`algorithmType${payload}1`),
                blockHeight: MD5(`blockHeight${payload}1`),
                algorithmHash: MD5(`algorithmHash${payload}1`),
                creatAddress: MD5(payload + 1),
                createdAt: '2021-10-14 19:50:59',
            }, {
                sliceName: 'Dreamkey',
                algorithmType: MD5(`algorithmType${payload}2`),
                blockHeight: MD5(`blockHeight${payload}2`),
                algorithmHash: MD5(`algorithmHash${payload}2`),
                creatAddress: MD5(payload + 2),
                createdAt: '2021-09-14 19:40:00',
            }
            ].map((item, index) => {
                return {
                    ...item,
                    sliceName: item.sliceName + index,
                    index,
                }
            })
        },
    },
})

export const { add } = acount.actions

export default acount.reducer
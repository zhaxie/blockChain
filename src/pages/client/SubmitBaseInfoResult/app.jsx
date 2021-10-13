import { Result, Button } from 'antd';

// const SubmitBaseInfoResult = (props) => {
//     return <Result
//     status="success"
//     title="提交成功"
//     subTitle="请耐心等待审核"
//     extra={[
//       <Button type="primary" key="console" onClick={() => {
//           props.history.go(-1)
//       }}>
//     返回
//       </Button>,
//     ]}
//   />
// }
// export default SubmitBaseInfoResult


import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@src/store/components/counterSlice.js'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}




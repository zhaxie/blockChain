import { Result, Button } from 'antd';
import { useLocation, useHistory } from 'react-router-dom'

const SubmitBaseInfoResult = (props) => {
  const history = useHistory()
  const { search } = useLocation()
  const id = new URLSearchParams(search).get('id')

  return <Result
    status="success"
    title="提交成功"
    subTitle="请耐心等待审核"
    extra={[
      <Button
        type="primary"
        key="console"
        disabled={!id}
        onClick={() => {
          history.push(`/sideLayout/toCheckList?id=${id}`)
        }}
      >
        审核发起人信息
      </Button>,
    ]}
  />
}
export default SubmitBaseInfoResult



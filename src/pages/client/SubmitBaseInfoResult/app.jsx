import { Result, Button } from 'antd';

const SubmitBaseInfoResult = (props) => {
    return <Result
    status="success"
    title="提交成功"
    subTitle="请耐心等待审核"
    extra={[
      <Button type="primary" key="console" onClick={() => {
          props.history.go(-1)
      }}>
    返回
      </Button>,
    ]}
  />
}
export default SubmitBaseInfoResult



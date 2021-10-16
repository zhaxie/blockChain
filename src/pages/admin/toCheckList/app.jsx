import { Table, Button } from 'antd';
import ContentWrapper from '@src/components/ContentWrapper/app.jsx'
import BlockDialog, { showModal as showBlockModal } from '@src/components/BlockDialog/app.jsx'


import { useSelector } from 'react-redux'
import { useHistory } from 'react-router';

let history

const columns = [
  {
    title: '企业名称',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    ellipsis: true,
  },
  {
    title: '证件号码',
    dataIndex: 'companyCode',
    key: 'companyCode',
    width: 200,
    ellipsis: true,
    render: (companyCode) => {
      return (
        <div>
          <span style={{ marginRight: '20px' }}>{companyCode}</span>
          <Button
            type="primary"
            size="small"
            onClick={() => {
              console.info('showBlockModal')
              showBlockModal({ title: '证件号码' })
            }}>
            查看
          </Button>
        </div>
      )
    }
  },
  {
    title: '实收资本',
    dataIndex: 'paidCapital',
    key: 'paidCapital',
    width: 50,
    ellipsis: true,
  },
  {
    title: '操作',
    key: 'action',
    fixed: 'right',
    width: 100,
    render: (text, record) => (
      <a
        style={{ display: 'block', width: '60px' }}
        onClick={() => {
          history.push(`/sideLayout/MyBaseInfo?id=${record.id}`)
        }}
      >查看详情</a>
    ),
  },
];

export default function CheckList() {
  const data = useSelector((state) => state.check.toCheckList)
  history = useHistory()

  console.info('data', data)

  return (
    <ContentWrapper>
      <Table columns={columns} dataSource={data} scroll={{ x: true }} rowKey={(record) => {
        return record.id
      }} />
      <BlockDialog></BlockDialog>
    </ContentWrapper>
  )
}

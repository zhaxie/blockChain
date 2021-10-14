import { Table, Button } from 'antd';
import ContentWrapper from '@src/components/ContentWrapper/app.jsx'
import BlockDialog, { showModal as showBlockModal } from '@src/components/BlockDialog/app.jsx'


import { useSelector } from 'react-redux'

const columns = [
  {
    title: '企业名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '证件号码',
    dataIndex: 'companyCode',
    key: 'companyCode',
    render: (companyCode) => {
      return (
        <div>
          <span>{companyCode}</span>
          <Button type="primary" onClick={() => {
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
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <a>查看详情</a>
    ),
  },
];

export default function CheckList() {
  const data = useSelector((state) => state.check.toCheckList)

  console.info('data', data)

  return (
    <ContentWrapper>
      <Table columns={columns} dataSource={data} />
      <BlockDialog></BlockDialog>
    </ContentWrapper>
  )
}

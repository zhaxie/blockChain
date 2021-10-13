import { Table, Tag, Space } from 'antd';
import ContentWrapper from '@src/components/ContentWrapper/app.jsx'


import { useSelector } from 'react-redux'

const columns = [
  {
    title: '企业名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '组织机构代码',
    dataIndex: 'companyCode',
    key: 'companyCode',
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
    </ContentWrapper>
  )
}

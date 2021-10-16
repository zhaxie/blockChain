import { Table, Tag, Space } from 'antd';
import { useHistory, useRouteMatch, useParams, useLocation } from 'react-router-dom'
import ContentWrapper from '@src/components/ContentWrapper/app.jsx'
import MD5 from 'MD5'
import { useSelector } from 'react-redux'

let history
let search

const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        width: 50,
        ellipsis: true,
        render: (index) => {
            return index + 1
        }
    },
    {
        title: '分片名',
        dataIndex: 'sliceName',
        key: 'sliceName',
        ellipsis: true,
    },
    {
        title: '账本类型',
        dataIndex: 'algorithmType',
        key: 'algorithmType',
        ellipsis: true,
    },
    {
        title: '区块高度',
        dataIndex: 'blockHeight',
        key: 'blockHeight',
        ellipsis: true,
    },
    {
        title: '账本哈希',
        dataIndex: 'algorithmHash',
        key: 'algorithmHash',
        ellipsis: true,
    },
    {
        title: '创建地址',
        dataIndex: 'creatAddress',
        key: 'creatAddress',
        ellipsis: true,
    },
    {
        title: '时间戳',
        dataIndex: 'createdAt',
        key: 'createdAt',
        width: 150,
        ellipsis: true,
    },
    {
        title: '操作',
        key: 'action',
        fixed: 'right',
        width: 100,
        ellipsis: true,
        render: (text, record) => (
            <a onClick={() => {
                const code = new URLSearchParams(search).get('code')
                history.push(`/sideLayout/AcountDetails?code=${code}&name=${record.sliceName}`)
            }}>查看详情</a>
        ),
    },
];

export default function CheckList() {
    history = useHistory()

    search = useLocation().search

    const code = new URLSearchParams(search).get('code')
    const tableDatas = useSelector((state) => state.acount.acounts[code])

    return (
        <ContentWrapper>
            <h1>账本列表</h1>
            <div >
                <Table
                    rowKey={(record) => {
                        return record.index
                    }}
                    scroll={{ x: true }}
                    columns={columns}
                    dataSource={tableDatas} />
            </div>
        </ContentWrapper>
    )
}

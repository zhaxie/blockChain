import { Table, Tag, Space } from 'antd';
import ContentWrapper from '@src/components/ContentWrapper/app.jsx'
import MD5 from 'MD5'


import { useSelector } from 'react-redux'

const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        render: (index) => {
            return index + 1
        }
    },
    {
        title: '分片名',
        dataIndex: 'sliceName',
        key: 'sliceName',
    },
    {
        title: '账本类型',
        dataIndex: 'algorithmType',
        key: 'algorithmType',
    },
    {
        title: '区块高度',
        dataIndex: 'blockHeight',
        key: 'blockHeight',
    },
    {
        title: '账本哈希',
        dataIndex: 'algorithmHash',
        key: 'algorithmHash',
    },
    {
        title: '创建地址',
        dataIndex: 'creatAddress',
        key: 'creatAddress',
    },
    {
        title: '时间戳',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
    {
        title: '操作',
        key: 'action',
        fixed: 'right',
        width: 100,
        render: (text, record) => (
            <a style={{display: 'block'}}>查看详情</a>
        ),
    },
];


const data = [{
    sliceName: 'Dreamkey',
    algorithmType: MD5('algorithmType'),
    blockHeight: MD5('blockHeight'),
    algorithmHash: MD5('algorithmHash'),
    creatAddress: MD5('creatAddress'),
    createdAt: '2021-10-14 19:40:59',
}, {
    sliceName: 'Dreamkey',
    algorithmType: MD5('algorithmType'),
    blockHeight: MD5('blockHeight'),
    algorithmHash: MD5('algorithmHash'),
    creatAddress: MD5('creatAddress'),
    createdAt: '2021-10-14 19:40:59',
}, {
    sliceName: 'Dreamkey',
    algorithmType: MD5('algorithmType'),
    blockHeight: MD5('blockHeight'),
    algorithmHash: MD5('algorithmHash'),
    creatAddress: MD5('creatAddress'),
    createdAt: '2021-10-14 19:40:59',
}
].map((item, index) => {
    return {
        ...item,
        sliceName: item.sliceName + index,
        index,
    }
})

export default function CheckList() {
    return (
        <ContentWrapper>
            <h1>账本列表</h1>
            <Table 
            rowKey={(record) => {
                return record.index
            }}
            scroll={{ x: true }} 
            columns={columns} 
            dataSource={data} />
        </ContentWrapper>
    )
}

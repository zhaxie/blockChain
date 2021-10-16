import ContentWrapper from '@src/components/ContentWrapper/app.jsx'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import MD5 from 'MD5'

import './app.less'

const AcountDetails = () => {
    const { search } = useLocation()
    const code = new URLSearchParams(search).get('code')
    const name = new URLSearchParams(search).get('name')
    const codeDatas = useSelector((state) => state.acount.acounts[code])

    let current = {}
    if (codeDatas) {
        current = codeDatas.find(item => item.sliceName === name)
    }

    const [blockInfo, setBlockInfo] = useState({
        blockHeight: '区块高度',
        creator: ' ',
        parantHash: '',
        createdAt: '2021-10-14 19:40:59',
        createSeconds: 30,
        hashType: 'sha3',
        blockHash: '',
        signAlgorithm: 'rsa',
        sign: '',
        targetPackageQty: 1,
        targetPackageAccountBookQty: 0,
        version: '4000000',
        creatorAlgorithmAddress: current.sliceName + '12121e23wscdc',
        examinerAddress: current.sliceName + 'shvsd23323bb xc ',
        examinerAlgorithmAddress: current.sliceName + 'shvsdbb xc ',
        ...current,
    })

    console.info('blockInfo', blockInfo)
    const [configList, setconfigList] = useState([
        {
            label: '分片名',
            key: 'sliceName',
        },
        {
            label: '账本类型',
            key: 'algorithmType',
        },
        {
            label: '区块高度',
            key: 'blockHeight',
        },
        {
            label: '共识算法',
            key: 'blockHeight',
        },
        {
            label: '存证账本',
            key: 'algorithmHash',
        },
        {
            label: '创建者地址算法',
            key: 'creatorAlgorithmAddress',
            useMD5: true,
        },
        {
            label: '创建者地址',
            key: 'creatAddress',
        },
        {
            label: '验证者地址算法',
            key: 'examinerAlgorithmAddress',
            useMD5: true,
        },
        {
            label: '验证者地址',
            key: 'examinerAddress',
            useMD5: true,
        },
        {
            label: '区块创建者',
            key: 'creator',
            useMD5: true,
        },
        {
            label: '父区块哈希',
            key: 'parantHash',
            useMD5: true,
        },
        {
            label: '哈希算法',
            key: 'hashType',
        },
        {
            label: '区块哈希',
            key: 'blockHash',
            useMD5: true,
        },
        {
            label: '签名算法',
            key: 'signAlgorithm',
        },
        {
            label: '签名',
            key: 'sign',
            useMD5: true,
        },
        {
            label: '版本号',
            key: 'version',
        },
    ]);


    return (
        <ContentWrapper>
            <div className="blcok-dialog">
                <div>
                    {configList.map((item, index) => {
                        const { key, label, useMD5 } = item
                        const value = blockInfo[key]

                        return (
                            <div className="info-item" key={index}>
                                <div className="label">{item.label}</div>
                                <div className="value">{useMD5 ? MD5(value) : value}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </ContentWrapper>
    );
};

export default AcountDetails
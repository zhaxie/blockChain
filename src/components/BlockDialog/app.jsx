import React, { useState } from 'react';
import { Modal } from 'antd';
import MD5 from 'MD5'

import './app.less'

export let showModal

const BlockDialog = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalInfo, setIsModalInfo] = useState({
        title: '',
    });
    const [blockInfo, setBlockInfo] = useState({
        sliceName: 'Dreamkey',
        commonAlgorithm: '区块高度',
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
    })
    const [blockConfigList, setBlockConfigList] = useState([
        {
            label: '分片名',
            key: 'sliceName',
        },
        {
            label: '共识算法',
            key: 'commonAlgorithm',
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
            label: '出块时间',
            key: 'createdAt',
        },
        {
            label: '目标出块间隔/(秒)',
            key: 'createSeconds',
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
            label: '打包目标数',
            key: 'targetPackageQty',
        },
        {
            label: '打包账本数',
            key: 'targetPackageAccountBookQty',
        },
        {
            label: '版本号',
            key: 'version',
        },
    ]);


    showModal = (options) => {
        setIsModalVisible(true);
        setIsModalInfo({
            ...modalInfo,
            ...options,
        })
        // setBlockInfo({
        //     ...blockInfo,
        //     ...
        // })
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Modal
            title={modalInfo.title}
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
        >
            <div className="blcok-dialog">
                <div>
                    {blockConfigList.map((item, index) => {
                        const {key, label, useMD5} = item
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
        </Modal>
    );
};

export default BlockDialog
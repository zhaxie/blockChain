import React, { useState } from 'react'
import ContentWrapper from '@src/components/ContentWrapper/app.jsx'
import { Form, Input, InputNumber, Button, Select, Row, Col, Cascader, Modal } from 'antd';
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCheck } from '@src/store/components/check.js'
import { add as addAcount } from '@src/store/components/acount.js'

const { Option } = Select;
const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 10,
    },
};

const validateMessages = {
    required: '${label}必填!',
    types: {
        email: '${label} 邮箱格式有误!',
        number: '${label} 请输入数字!',
    },
    number: {
        range: '${label} 请输入 ${min} 和 ${max} 之间的数字',
    },
};


const companyTypes = [
    {
        label: '合资',
        value: 1,
    },
    {
        label: '独资',
        value: 2,
    },
    {
        label: '国有',
        value: 3,
    },
    {
        label: '私营',
        value: 4,
    },
    {
        label: '全民所有制',
        value: 5,
    },
    {
        label: '集体所有制',
        value: 6,
    },
    {
        label: '股份制',
        value: 7,
    },
    {
        label: '有限责任',
        value: 8,
    },
    {
        label: '其他',
        value: 9,
    },
]

const liveAreaList = [
    {
        value: '广州',
        label: '广州',
        children: [
            {
                value: '越秀区',
                label: '越秀区',
            },
            {
                value: '海珠区',
                label: '海珠区',
            },
            {
                value: '荔湾区',
                label: '荔湾区',
            },
            {
                value: '天河区',
                label: '天河区',
            },
            {
                value: '白云区',
                label: '白云区',
            },
            {
                value: '黄埔区',
                label: '黄埔区',
            },
            {
                value: '南沙区',
                label: '南沙区',
            },
            {
                value: '番禺区',
                label: '番禺区',
            },
            {
                value: '花都区',
                label: '花都区',
            },
            {
                value: '增城区',
                label: '增城区',
            },
            {
                value: '从化区',
                label: '从化区',
            },
        ],
    },
];

const MyBaseInfo = (props) => {
    let currentCompanyCode;
    let current;
    let isDisabled

    const { search } = useLocation()
    const uRLSearchParams = new URLSearchParams(search)
    const id = Number(uRLSearchParams.get('id'))
    const toCheckList = useSelector((state) => state.check.toCheckList)

    if (id) {
        current = toCheckList.find(item => item.id === id)
        isDisabled = true
    } else {
        current = {
            liveCode: ['广州', '天河区',],
            name: '企业名',
            companyType: 1,
            registerCode: '1111',
            mainBodyId: '4405071995',
            liveStatus: 1,
            companyCode: 111222,
            societyCode: 10086,
            liveBelong: 1,
            companyDutyCode: 222,
            productionArea: ['广州', '天河区',],
            productionAreaDetails: '测试具体生产地址1',
            liveDetails: "具体住所地址",
            paidCapital: 100,
            tel: 110,
            areaCode: 120,
            staffQty: 1000,
            saleRange: '一般经营范围',
            permiseSaleRange: '许可经营范围',
        }
    }
    const dispatch = useDispatch()
    const [formValues] = useState(current);

    const onFinish = (values) => {
        console.log(values);

        Modal.confirm({
            title: '确定提交',
            okText: '确定',
            cancelText: '取消',
            onOk: () => {
                const id = new Date().getTime()

                dispatch(addCheck({
                    ...values,
                    id
                }))
                props.history.push(`/sideLayout/SubmitBaseInfoResult?id=${id}`)

            }
        })
    };

    return (
        <ContentWrapper>
            <Form {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
                initialValues={formValues}>

                <Form.Item
                    name={['name']}
                    label="企业名称"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input disabled={isDisabled} />
                </Form.Item>
                <Form.Item
                    name={['companyType']}
                    label="企业类型"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="请选择企业类型"
                        allowClear
                        disabled={isDisabled}
                    >
                        {companyTypes.map(item => {
                            return <Option value={item.value} key={item.value}>{item.label}</Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item
                    name={['registerCode']}
                    label="注册号"
                >
                    <Input disabled={isDisabled} />
                </Form.Item>
                <Form.Item
                    name={['mainBodyId']}
                    label="主体身份证"
                >
                    <Input disabled={isDisabled} />
                </Form.Item>
                <Form.Item
                    name={['liveStatus']}
                    label="经营状态"
                >
                    <Select
                        placeholder="请选择经营状态"
                        allowClear
                        disabled={isDisabled}
                    >
                        <Option value={1} key={1}>在营</Option>
                        <Option value={2} key={2}>已结业</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="组织机构代码（9位）"
                >
                    <Row justify="space-between">
                        <Form.Item
                            name={['companyCode']}
                        >
                            <Input disabled={isDisabled} onChange={(e) => {
                                currentCompanyCode = e.target.value
                            }} />
                        </Form.Item>
                        <Col >
                            <Button type="primary" onClick={() => {
                                const code = currentCompanyCode || formValues.companyCode

                                dispatch(addAcount(code))

                                props.history.push(`/sideLayout/AcountList?code=${code}`)
                            }}>
                                查看
                            </Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item
                    name={['societyCode']}
                    label="统一社会信用代码（18位）"
                >
                    <Input disabled={isDisabled} />
                </Form.Item>
                <Form.Item
                    name={['liveCode']}
                    label="住所所在区"
                >
                    <Cascader
                        options={liveAreaList}
                        placeholder="请选择住所所在区"
                        disabled={isDisabled}
                    />
                </Form.Item>
                <Form.Item name={['liveDetails']} label="具体住所地址">
                    <Input disabled={isDisabled} />
                </Form.Item>
                <Form.Item name={['liveBelong']} label="住所产权">
                    <Select
                        placeholder="请选择经营状态"
                        allowClear
                        disabled={isDisabled}
                    >
                        <Option value={1} key={1}>私产房</Option>
                        <Option value={2} key={2}>公房</Option>
                        <Option value={3} key={3}>经济商用房</Option>
                        <Option value={4} key={4}>集体所有房</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name={['paidCapital']}
                    label="实收资本（万元）"
                >
                    <Input disabled={isDisabled} />
                </Form.Item>
                <Form.Item
                    label="企业税号"
                >
                    <Row justify="space-between">
                        <Col >
                            <Form.Item
                                name={['companyDutyCode']}
                            >
                                <Input disabled={isDisabled} />
                            </Form.Item>
                        </Col>
                        <Button type="primary" onClick={() => {
                            props.history.push('/sideLayout/AcountList')
                        }}>
                            查看
                        </Button>
                    </Row>
                </Form.Item>
                <Form.Item
                    name={['productionArea']}
                    label="生产经营所在区"
                >
                    <Cascader
                        options={liveAreaList}
                        placeholder="请选择生产经营所在区"
                        disabled={isDisabled}
                    />
                </Form.Item>
                <Form.Item name={['productionAreaDetails']} label="具体生产经营地址">
                    <Input disabled={isDisabled} />
                </Form.Item>
                <Form.Item
                    name={['tel']}
                    label="联系电话"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input disabled={isDisabled} />
                </Form.Item>
                <Form.Item
                    name={['areaCode']}
                    label="邮政编码"
                >
                    <Input disabled={isDisabled} />
                </Form.Item>
                <Form.Item
                    name={['staffQty']}
                    label="从业人数"
                >
                    <Input disabled={isDisabled} />
                </Form.Item>
                <Form.Item name={['saleRange']} label="一般经营范围">
                    <Input.TextArea disabled={isDisabled} />
                </Form.Item>
                <Form.Item name={['permiseSaleRange']} label="许可经营范围">
                    <Input.TextArea disabled={isDisabled} />
                </Form.Item>
                {isDisabled ? null :
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                }
            </Form>
        </ContentWrapper>
    );
};
export default MyBaseInfo

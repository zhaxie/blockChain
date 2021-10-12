import React from 'react'
import ContentWrapper from '@src/components/ContentWrapper/app.jsx'





import { Form, Input, InputNumber, Button, Select, Row, Col, Cascader } from 'antd';
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
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const MyBaseInfo = () => {
    const onFinish = (values) => {
        console.log(values);
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


    return (
        <ContentWrapper>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} initialValues={{
                user: {
                    liveCode: ['广州', '天河区',]
                }
            }}>
                <Row gutter={24}>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <Form.Item
                            name={['user', 'name']}
                            label="企业名称"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <Form.Item
                            name={['user', 'companyType']}
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
                            >
                                {companyTypes.map(item => {
                                    return <Option value={item.value} key={item.value}>{item.label}</Option>
                                })}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Form.Item
                        name={['user', 'registerCode']}
                        label="注册号"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'mainBodyId']}
                        label="主体身份证"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'liveStatus']}
                        label="经营状态"
                    >
                        <Select
                            placeholder="请选择经营状态"
                            allowClear
                        >
                            <Option value={1} key={1}>在营</Option>
                            <Option value={2} key={2}>已结业</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={['user', 'companyCode']}
                        label="组织机构代码（9位）"
                        rules={[

                        ]}
                    >
                        <Row justify="space-between">
                            <Col >
                                <Input />
                            </Col>
                            <Button type="primary" htmlType="submit">
                                电子证照
                            </Button>
                        </Row>
                    </Form.Item>
                    <Form.Item
                        name={['user', 'mainBodyId']}
                        label="统一社会信用代码（18位）"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'liveCode']}
                        label="住所所在区"
                    >
                        <Cascader
                            options={liveAreaList}
                            placeholder="请选择住所所在区"
                        />
                    </Form.Item>
                    <Form.Item name={['user', 'liveDetails']} label="具体住所地址">
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'liveBelong']} label="住所产权">
                        <Select
                            placeholder="请选择经营状态"
                            allowClear
                        >
                            <Option value={1} key={1}>私产房</Option>
                            <Option value={2} key={2}>公房</Option>
                            <Option value={3} key={3}>经济商用房</Option>
                            <Option value={4} key={4}>集体所有房</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={['user', 'paidCapital']}
                        label="实收资本"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'paidCapital']}
                        label="企业税号"
                    >
                        <Row justify="space-between">
                            <Col >
                                <Input />
                            </Col>
                            <Button type="primary" htmlType="submit">
                                电子证照
                            </Button>
                        </Row>
                    </Form.Item>
                    <Form.Item
                        name={['user', 'productionArea']}
                        label="生产经营所在区"
                    >
                        <Cascader
                            options={liveAreaList}
                            placeholder="请选择生产经营所在区"
                        />
                    </Form.Item>
                    <Form.Item name={['user', 'productionAreaDetails']} label="具体生产经营地址">
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'name']}
                        label="联系电话"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'name']}
                        label="邮政编码"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'name']}
                        label="从业人数"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Row>
            </Form>
        </ContentWrapper>
    );
};
export default MyBaseInfo

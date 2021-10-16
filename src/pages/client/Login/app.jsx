import { Form, Input, Button, Checkbox, message } from 'antd';
import ContentWrapper from '@src/components/ContentWrapper/app.jsx'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { setUserInfo } from '@src/store/components/user.js'

import './app.less'

const Login = (props) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()

    const onFinish = (values) => {
        console.log('Success:', values);
        console.info('location', location)
        console.info('location.hash', location.hash)
        const { search } = location

        const redirectUrl = new URLSearchParams(search).get('redirectUrl')

        console.info('redirectUrl', redirectUrl)

        dispatch(setUserInfo(values))
        history.push(redirectUrl || '/')

        message.success('登录成功')
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login-wrapper">
            <ContentWrapper>
                <div className="login-title">登录</div>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 10,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </ContentWrapper>
        </div>
    );
};


export default Login
import React from 'react'
import { Avatar, Popover, Button, Layout } from 'antd'
import { UserOutlined } from '@ant-design/icons';

import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { login } from '@src/public/methods/index.js'

import { cleanUserInfo } from '@src/store/components/user.js'
import './app.less'

const { Header, } = Layout;

const HeaderContent = () => {
    const { username } = useSelector((state) => state.user.userInfoObj)
    const dispatch = useDispatch()
    const history = useHistory()
    const { pathname } = useLocation()
    const toLogin = login()

    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', }}>
            <div className="layout-header-wrappper">
                <div
                    className="left-content"
                    onClick={() => {
                        if (pathname !== '/') {
                            history.push('/')
                        }
                    }}
                >
                    广州公司报备
                </div>
                <div className="right-content">
                    <div>
                        {username ?
                            <Popover content={
                                <div className="login-out-btn"
                                    onClick={() => {
                                        dispatch(cleanUserInfo())
                                    }}
                                >退出登录</div>
                            } placement="bottom">
                                <Avatar size={32} icon={<UserOutlined />} />
                                <span className="user-name">{username}</span>
                            </Popover>
                            : <Button onClick={toLogin}>去登录</Button>
                        }
                    </div>

                </div>
            </div>
        </Header>
    )
}

export default HeaderContent
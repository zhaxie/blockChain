import React from 'react'
import { Avatar, Popover } from 'antd'
import './app.less'

const loginPopover = (props) => {
    return <div className="login-out-btn" onClick={() => {
        props.history.push('/client/Login')
    }}>退出登录</div>
}
const Header = (props) => {
    return (
        <div className="layout-header-wrappper">
            <div className="left-content">
                广州公司报备
            </div>
            <div className="right-content">
                <div>
                    <Popover content={loginPopover(props)} placement="bottom">
                        <Avatar size={32} />
                        <span className="user-name">用户名</span>
                    </Popover>,
                </div>

            </div>
        </div>
    )
}

export default Header
import React from 'react'
import { Avatar, Popover } from 'antd'
import { useSelector } from 'react-redux'
import './app.less'

const loginPopover = (props) => {
    return <div className="login-out-btn" onClick={() => {
        console.info('location', location)
        props.history.push(`/client/Login?redirectUrl=${location.href}`)
    }}>退出登录</div>
}

const Header = (props) => {
    const {username} = useSelector((state) => state.user.userInfoObj)

    return (
        <div className="layout-header-wrappper">
            <div className="left-content">
                广州公司报备
            </div>
            <div className="right-content">
                <div>
                    <Popover content={loginPopover(props)} placement="bottom">
                        <Avatar size={32} />
                        <span className="user-name">{username}</span>
                    </Popover>
                </div>

            </div>
        </div>
    )
}

export default Header
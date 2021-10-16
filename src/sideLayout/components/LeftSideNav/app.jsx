import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { sideLayoutRoutes } from '@src/router/config.jsx'

function LeftSideNav() {
    const { pathname } = useLocation();

    console.info('pathname', pathname)

    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[pathname]}
        >
            {sideLayoutRoutes.map((item, index) => {
                return <Menu.Item key={item.path} >
                    <Link to={item.path}>{item.name}</Link>
                </Menu.Item>
            })}
        </Menu>
    )
}

export default LeftSideNav
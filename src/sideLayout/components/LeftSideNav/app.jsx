import React from 'react'
import { sideLayoutRoutes } from '@src/router/config.jsx'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

class LeftSideNav extends React.Component {
    render() {
        console.info('sideLayoutRoutes', sideLayoutRoutes)
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                {sideLayoutRoutes.map((item, index) => {
                    return <Menu.Item key={index} >
                        <Link to={item.path}>{item.name}</Link>
                    </Menu.Item>
                })}
            </Menu>
        )
    }
}

export default LeftSideNav
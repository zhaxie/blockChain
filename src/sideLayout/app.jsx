import React from 'react'

import { Layout, Menu } from 'antd';
import HeaderContent from './components/Header/app'
import LeftSideNav from './components/LeftSideNav/app'
import {
    Route,
} from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

import './app.less'
class LayOut extends React.Component {
    render() {
        const { routes } = this.props
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <HeaderContent {...this.props}></HeaderContent>
                </Header>
                <Content>
                    <Layout>
                        <Sider
                            style={{
                                overflow: 'auto',
                                position: 'fixed',
                                top: '64px',
                                left: 0,
                                height: 'calc(100vh - 64px)',
                            }}
                        >
                            <LeftSideNav {...this.props}></LeftSideNav>
                        </Sider>
                        <Layout className="site-layout" style={{ marginLeft: 200, paddingTop: 64 }}>
                            <Content style={{ overflow: 'initial' }}>
                                {routes.map((route, i) => (
                                    <Route
                                        key={route.path}
                                        path={route.path}
                                        render={props => (
                                            // pass the sub-routes down to keep nesting
                                            <route.component {...props} routes={route.routes} />
                                        )}
                                    />
                                ))}
                            </Content>
                        </Layout>
                    </Layout>
                </Content>
            </Layout>
        )
    }
}

export default LayOut
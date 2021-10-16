import React from 'react'
import { Button, Layout } from 'antd'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import HeaderContent from '@src/sideLayout/components/Header/app.jsx'
import { login } from '@src/public/methods/index.js'

import './app.less'

const { Header, Content, } = Layout;

const Home = (props) => {
    const { username } = useSelector((state) => state.user.userInfoObj)
    const toLogin = login()
    const history = useHistory()

    return <div className="home-wrapper">
        <Layout>
            <HeaderContent ></HeaderContent>
            <Content>
                <div className="banner-wrapper">
                    <img className="img-content" src="
                    https://static.gdzwfw.gov.cn/mhyy-be/20210929/1bcd05f1-d634-4805-85eb-6df372bc1132.jpg" alt="" />
                </div>
                <div className="footer-wrapper">
                    <Button type="primary" size="large" onClick={() => {
                        const toPath = '/sideLayout/MyBaseInfo'

                        if (username) {
                            history.push(toPath)
                        } else {
                            toLogin(toPath)
                        }
                    }}> 点我去报备 {'>'} </Button>
                </div>
            </Content>
        </Layout>
    </div>
}

export default Home

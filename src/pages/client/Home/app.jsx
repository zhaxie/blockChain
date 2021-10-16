import React from 'react'
import { Button } from 'antd'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const Home = (props) => {
    const { username } = useSelector((state) => state.user.userInfoObj)
    const { pathname } = useLocation

    return <div>
        <div>首页</div>
        <Button type="primary"
            onClick={() => {
                const pathBaseInfo = '/sideLayout/MyBaseInfo'
                if (username) {
                    props.history.push(pathBaseInfo)
                } else {
                    const pathBaseInfo = '/sideLayout/MyBaseInfo'
                    props.history.push(`/client/Login?redirectUrl=${pathname}`)
                }
            }}
        >审核报备</Button>
    </div>
}

export default Home
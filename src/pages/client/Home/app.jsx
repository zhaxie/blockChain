import React from 'react'
import { Button } from 'antd'
import { useSelector } from 'react-redux'

const Home = (props) => {
    const { username } = useSelector((state) => state.user.userInfoObj)

    return <div>
        <div>首页</div>
        <Button type="primary"
            onClick={() => {
                const pathBaseInfo = '/sideLayout/MyBaseInfo'
                if (username) {
                    props.history.push(pathBaseInfo)
                } else {
                    props.history.push(`/client/Login?redirectUrl=${pathBaseInfo}`)
                }
            }}
        >审核报备</Button>
    </div>
}

export default Home
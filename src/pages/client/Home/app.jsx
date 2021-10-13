import React from 'react'
import { Button } from 'antd'

const Home = (props) => {
    return <div>
        <div>首页</div>
        <Button type="primary"
            onClick={() => {
                props.history.push('/sideLayout/MyBaseInfo')
            }}
        >填写公司基本信息</Button>
    </div>
}

export default Home
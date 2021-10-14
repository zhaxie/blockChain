
import Login from '../pages/client/Login/app'
import SideLayout from '../sideLayout/app'
import MyBaseInfo from '../pages/client/MyBaseInfo/app'
import SubmitBaseInfoResult from '../pages/client/SubmitBaseInfoResult/app'
import toCheckList from '@src/pages/admin/toCheckList/app.jsx'
import AcountList from '@src/pages/AcountList/app.jsx'

import Home from '../pages/client/Home/app'

export const sideLayoutRoutes = [
    {
        name: '发起审核',
        path: "/sideLayout/MyBaseInfo",
        component: MyBaseInfo
    },

    {
        name: '审核发起人信息',
        path: "/sideLayout/toCheckList",
        component: toCheckList
    },
];

const fullScreenRoutes = [
    {
        name: '登录',
        path: "/client/Login",
        component: Login,
    },
    {
        path: "/sideLayout",
        component: SideLayout,
        routes: [
            ...sideLayoutRoutes,
            {
                name: '提交结果页',
                path: "/sideLayout/SubmitBaseInfoResult",
                component: SubmitBaseInfoResult
            },
            {
                name: '账本列表',
                path: "/sideLayout/AcountList",
                component: AcountList
            },
        ]
    },
    {
        name: '首页',
        path: "/",
        component: Home
    },
]

export default [
    ...fullScreenRoutes,
    ...sideLayoutRoutes,
]

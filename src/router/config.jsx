
import Login from '../pages/client/Login/app'
import SideLayout from '../sideLayout/app'
import MyBaseInfo from '../pages/client/MyBaseInfo/app'
import SubmitBaseInfoResult from '../pages/client/SubmitBaseInfoResult/app'


export const sideLayoutRoutes = [
    {
        name: '我的信息',
        path: "/MyBaseInfo",
        component: MyBaseInfo
    },
    {
        name: '提交结果页',
        path: "/SubmitBaseInfoResult",
        component: SubmitBaseInfoResult
    },
];

const fullScreenRoutes = [
    {
        path: "/client/Login",
        component: Login,
    },
    {
        path: "/",
        component: SideLayout,
        routes: sideLayoutRoutes
    }
]




export default [
    ...fullScreenRoutes,
    ...sideLayoutRoutes,
]

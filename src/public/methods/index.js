
import {
    HashRouter,
    Switch,
    Route,
    useLocation,
    useHistory,
    useParams
} from "react-router-dom";

export function login() {
    const history = useHistory()
    const location = useLocation()

    return function (toPath) {
        const { pathname, search } = location

        history.push(`/client/Login?redirectUrl=${toPath || pathname + search}`)
    }
}
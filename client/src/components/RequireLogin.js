import { Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../utils/auth"

export const RequireLogin = ({ children }) => {
    const auth = useAuth()

    if(auth.user) {
        return <Navigate to='/' />
    }
    return children
}
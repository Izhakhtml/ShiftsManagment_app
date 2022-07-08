import react, { useContext } from "react";
import { Link, Navigate, Route } from "react-router-dom"
import ContainAll from "../components/pages/login & register/ContainAll";
import { UserProvider } from "../context/UserContext";
const ProtectedRoute = ({ children }) => {
    const { user, setUser, isLogin, setIsLogin } = useContext(UserProvider)
    if (isLogin) {
        return children;
    } else {
        // return <Navigate to='/'/>
    }
};
export default ProtectedRoute;
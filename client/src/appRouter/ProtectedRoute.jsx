import react, { useContext } from "react";
import { Link, Navigate, Route } from "react-router-dom"
import ContainAll from "../components/pages/login & register/ContainAll";
import { UserProvider } from "../context/UserContext";
// console.log("xdfs");
const ProtectedRoute = ({children}) => {
    const { user, setUser, isLogin, setIsLogin } = useContext(UserProvider)
    if (isLogin) {
        // console.log("in");
        return children;
    } else {
        // console.log("erorr");
        // return <Navigate to='/' />
    }
};
export default ProtectedRoute;
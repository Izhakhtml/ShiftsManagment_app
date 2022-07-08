import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "../context/UserContext";
import CalendarApp from "../components/pages/calender/Calendar";
import Profile from "../components/pages/profile/Profile";
import Footer from "../components/parts/Footer";
import Header from "../components/parts/Header";
import ContainAll from "../components/pages/login & register/ContainAll";
import ProtectedRoute from "./ProtectedRoute";
const AppRouter = () => {
    const { user, isLogin } = useContext(UserProvider);
    return (
        <BrowserRouter>
            <div className="container_app">
                <Header />
                <Routes>
                    {
                        user.userName != undefined ?
                            <>
                                <Route path="/" element={<Profile />}></Route>
                                <Route path="/settingShift" element={<CalendarApp />}></Route>
                            </> : <Route path="/" element={<ContainAll />}></Route>
                    }
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
export default AppRouter;
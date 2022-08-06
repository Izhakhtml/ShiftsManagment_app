import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "../context/UserContext";
import CalendarApp from "../components/pages/calender/Calendar";
import Profile from "../components/pages/profile/Profile";
import Footer from "../components/parts/Footer";
import Header from "../components/parts/Header";
import ContainAll from "../components/pages/login & register/ContainAll";
import Register from "../components/pages/login & register/Register";
import Login from "../components/pages/login & register/Login";
// import ProtectedRoute from "./ProtectedRoute";
const AppRouter = () => {
    const { user } = useContext(UserProvider);
    return (
        <BrowserRouter>

            <div className="container_app">
                <Header />
                <Routes>
                    {
                        user.userName != undefined ?
                            <>
                                <Route path="/" element={ <Profile />}></Route>
                                <Route path="/settingShift" element={<CalendarApp />}></Route>
                            </> : 
                            <>
                                <Route path="/" element={<ContainAll />}></Route>
                            </>
                    }
                    {/* <Route path="/" element={<ClientRoutes />}></Route>
                    <Route path="/settingShift" element={<ClientRoutes />}></Route>
                    <Route path="/" element={<ProtectedRoute><ClientRoutes /></ProtectedRoute> }></Route> */}
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
export default AppRouter;
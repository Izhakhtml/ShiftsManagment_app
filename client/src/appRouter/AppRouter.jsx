import { BrowserRouter, Route, Routes } from "react-router-dom";
import CalendarApp from "../components/pages/calender/Calendar";
import Profile from "../components/pages/calender/Profile";
import Footer from "../components/parts/Footer";
import Header from "../components/parts/Header";
const AppRouter = () => {
    
    return (
        <BrowserRouter>
            <div className="container_app">
                <Header />
                <Routes>
                    <Route exact path="/" element={<Profile />}></Route>
                    <Route path="/settingShift" element={<CalendarApp />}></Route>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
export default AppRouter;
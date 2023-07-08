import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Naver/Naver";
import Footer from "../Pages/Shared/Naver/Footer/Footer";


const Main = () => {
    return (
        <div>
             <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
import { Outlet } from "react-router-dom";
import Navigation from "../../routes/Navigation/Navigation";
import Footer from "../Footer/Footer";

const Layout = () =>{
    return (
        <>
         <Navigation/>
         <Outlet />
         <Footer />
        </>
    )
}

export default Layout
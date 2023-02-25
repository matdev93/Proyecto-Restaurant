import { Outlet } from "react-router-dom";
import Navegador from "../../routes/Navegador/Navegador";
// import Footer from './Footer'

const Layout = () =>{
    return (
        <div>
            <Navegador/>
            <body>
                <Outlet />
            </body>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout
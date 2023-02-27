import { Routes, Route } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Home from '../../pages/Home/Home'
import Nosotros from '../../pages/Nosotros/Nosotros'
import Catalogo from '../../pages/Catalogo/Catalogo'
import Locales from '../../pages/Locales/Locales'
import Contacto from '../../pages/Contacto/Contacto'
import Reservas from '../../pages/Reservas/Reservas'
import Users from '../../pages/Admin/Users/Users'
import Product from '../../pages/Catalogo/Product'


const Rutas = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />}/>
                    <Route path='/nosotros' element={<Nosotros />}/>
                    <Route path='/locales' element={<Locales />}/>
                    <Route path='/reservas' element={<Reservas />}/>
                    <Route path='/contacto' element={<Contacto />}/>
                    <Route path='/catalogo' element={<Catalogo />}/>
                    <Route path='/admin/users' element={<Users />}/>
                    <Route path='/catalogo/catalogoId' element={<Product />}/>
                </Route>
            </Routes>
        </>
    )
};



export default Rutas;
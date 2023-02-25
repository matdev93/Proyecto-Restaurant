import { Routes, Route} from 'react-router-dom'
import Layout from '../../components/Layout/Layout'


const Rutas = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />}/>
                </Route>
            </Routes>
        </div>
    )
}



export default Rutas;
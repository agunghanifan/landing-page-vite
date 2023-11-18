import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'

const RoutesConfig = () => {
  return (
    <>
    <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/about' Component={About}></Route>
    </Routes>
    </>
  )
}

export default RoutesConfig
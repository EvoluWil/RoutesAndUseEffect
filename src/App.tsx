import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Header from './components/Header/Header'
import ProductsByGender from './pages/ProductsByGender/ProductsByGender'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/men' Component={ProductsByGender} />
        <Route path='/women' Component={ProductsByGender} />
        <Route path='/product-detail/:id' Component={ProductDetail} />
      </Routes>
    </>
  )
}

export default App

import './App.css'
import { Header } from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { CatalogPage } from './pages/CatalogPage/CatalogPage'
import { ProductPage } from './pages/ProductPage/ProductPage'
import { Footer } from './components/Footer/Footer'
import { UsersPage } from './pages/UsersPage/UsersPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/catalog' element={<CatalogPage/>}/>
        <Route path='/catalog/:id' element={<ProductPage/>} />
        <Route path='/:id' element={<ProductPage/>} />
        <Route path='/users' element={<UsersPage/>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App

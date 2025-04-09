import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import './App.css'


const app = () => (
<BrowserRouter>
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/products" Component={Products} />
      <Route exact path="/products/:id" Component={ProductItemDetails} />
    </Routes>
  </BrowserRouter>
)

export default app
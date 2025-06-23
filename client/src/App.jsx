import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Route, Routes } from 'react-router-dom'
import Authlayout from './components/auth/layout'
import Authlogin from './pages/auth/login'
import Authregister from './pages/auth/register'
import Home from './pages/home'
import AdminLayout from './components/admin-view/layout'
import Admindashboard from './pages/admin-view/dashboard'
import Adminfeatures from './pages/admin-view/features'
import AdminProducts from './pages/admin-view/products'
import AdminOrders from './pages/admin-view/orders'
import ShoppingLayout from './components/shopping-view/layout'
import NotFound from './pages/not-found'
import ShoppingHome from './pages/shopping-view/home'
import ShoppingListing from './pages/shopping-view/listing'
import ShoppingAccount from './pages/shopping-view/account'
import ShoppingCheckout from './pages/shopping-view/checkout'
import CheckAuth from './components/common/checkAuth'
import UnAuthPage from './pages/un-auth'



function App() {
  const isAuthenticated = false;
  const user = {
    name:"BOJ",
    role:"user"
  }

  return (
    <>
      <div className='flex flex-col overflow-hidden bg-white'>
        <Routes>
          <Route path='' element={<Home />} />
          
          <Route path='/auth' element={ <CheckAuth isAuthenticated={isAuthenticated} user={user}> <Authlayout/> </CheckAuth>}>
              <Route path='login' element={<Authlogin/>}></Route>
              <Route path='register' element={<Authregister/>}></Route>
          </Route>
          
          <Route path='/admin' element={ <CheckAuth isAuthenticated={isAuthenticated} user={user}>  <AdminLayout /> </CheckAuth>}> 
              <Route path='dashboard' element={<Admindashboard />} />
              <Route path='features' element={<Adminfeatures />} />
              <Route path='products' element={<AdminProducts />} />
              <Route path='orders' element={<AdminOrders />} />
          </Route>

          <Route path="/shop" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}>  <ShoppingLayout /> </CheckAuth>}>
              <Route path='home' element={<ShoppingHome />} />
              <Route path='listing' element={<ShoppingListing />} />
              <Route path='account' element={<ShoppingAccount />} />
              <Route path='checkout' element={<ShoppingCheckout />} />
          </Route>
          <Route path='*' element={<NotFound />} />
          <Route path='unauth-page' element={<UnAuthPage />} />

        </Routes>
      </div>
    </>
  )
}

export default App

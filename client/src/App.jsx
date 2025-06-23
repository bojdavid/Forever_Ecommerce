import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Route, Routes } from 'react-router-dom'
import Authlayout from './components/auth/layout'
import Authlogin from './pages/auth/login'
import Authregister from './pages/auth/register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col overflow-hidden bg-white'>
        <Routes>
          <Route path='/auth' element={<Authlayout/>}>
              <Route path='/login' element={<Authlogin/>}></Route>
              <Route path='/register' element={<Authregister/>}></Route>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App

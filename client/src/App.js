import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useEffect } from 'react'
import axios from 'axios'
import NavBar from './components/common/NavBar'
import Footer from './components/common/Footer'
import LandingPage from './components/pages/LandingPage'
import LocationMultiPage from './components/pages/LocationMultiPage'
import LocationSinglePage from './components/pages/LocationSinglePage'
import NotFound from './components/pages/NotFound'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import UserProfilePage from './components/pages/UserProfilePage'




const App = () => {
  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios.get('/api/products/') // * <-- replace with your endpoint
  //     console.log(data)
  //   }
  //   getData()
  // })

  return (
    <div className='sitewrapper'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/locations' element={<LocationMultiPage />} />
          <Route path='/locations/:id' element={<LocationSinglePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/profile/:id' element={<UserProfilePage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>

  )
}

export default App

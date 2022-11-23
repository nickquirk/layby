import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/common/NavBar'
import Footer from './components/common/Footer'
import LandingPage from './components/pages/LandingPage'
import LocationMultiPage from './components/pages/LocationMultiPage'
import LocationSinglePage from './components/pages/LocationSinglePage'
import NotFound from './components/pages/NotFound'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import UserProfilePage from './components/pages/UserProfilePage'
import AddLocation from './components/pages/AddLocation'
import EditLocation from './components/pages/EditLocation'



const App = () => {

  return (
    <div className='sitewrapper'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/locations' element={<LocationMultiPage />} />
          <Route path='/locations/:locationId' element={<LocationSinglePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/locations/add' element={<AddLocation />} />
          <Route path='/locations/:locationId/edit' element={<EditLocation />} />
          {/* Just changed this to work on the profile page, will change it back :) */}
          <Route path='/profile/:userId' element={<UserProfilePage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  )
}

export default App

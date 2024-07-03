import { useState } from 'react'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Profile from './components/Profile'
import Username from './components/Username'
import Password from './components/Password'
import Reset from './components/Reset'
import Register from './components/Register'
import PageNotFound from './components/PageNotFound'
import Recovery from './components/Recovery'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
      <Route path='' element={<Username />} />
      <Route path='profile' element={<Profile />} />
      <Route path='password' element={<Password />} />
      <Route path='reset' element={<Reset />} />
      <Route path='register' element={<Register />} />
      <Route path='recovery' element={<Recovery />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
)

function Layout() {
  return (
    <Outlet />
  )
}


function App() {


  return (
    <RouterProvider router={router} >
    </RouterProvider>
  )
}

export default App

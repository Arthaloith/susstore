import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { routes } from './routes'
import { useDispatch } from 'react-redux'
import * as UserService from './services/UserService'
import { updateUser } from './redux/slides/userSlide'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import { isJsonString } from './utils'
function App() {
  const dispatch = useDispatch();

  axios.interceptors.request.use(async (config) => {
    // Do something before request is sent
    return config;
  }, (err) => {
    return Promise.reject(err)
  })

  useEffect(() => {
    let storageData = localStorage.getItem('access_token')
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData)
      const decoded = jwtDecode(storageData)
      if (decoded?.id) {
        handleGetDetailsUser(decoded?.id, storageData)
      }
    }
  }, [])

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({ ...res?.data, access_token: token }))
  }

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const Layout = route.isShowHeader ? DefaultComponent : Fragment
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App
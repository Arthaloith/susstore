import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { routes } from './routes'
import { useDispatch, useSelector } from 'react-redux'
import * as UserService from './services/UserService'
import { updateUser } from './redux/slides/userSlide'
import { jwtDecode } from 'jwt-decode'
import { isJsonString } from './utils'
import Loading from './components/LoadingComponent/Loading'

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true); // Set initial isLoading state to true
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      const { storageData, decoded } = handleDecoded();
      if (decoded?.id) {
        await handleGetDetailsUser(decoded?.id, storageData);
      }
      setIsLoading(false); // Update isLoading state to false after data fetching and initialization
    };

    fetchData();
  }, []);
  
  const handleDecoded = () => {
    let storageData = localStorage.getItem('access_token')
    let decoded = {}
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData)
      decoded = jwtDecode(storageData)
    }
    return { decoded, storageData }
  }

  UserService.axiosJWT.interceptors.request.use(async (config) => {
    // Do something before request is sent
    const currentTime = new Date()
    const { decoded } = handleDecoded()
    if (decoded?.exp < currentTime.getTime() / 1000) {
      const data = await UserService.refreshToken()
      config.headers['token'] = `Bearer ${data?.access_token}`
    }
    return config;
  }, (err) => {
    return Promise.reject(err)
  })

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({ ...res?.data, access_token: token }))
    setIsLoading(false)
  }

  return (
  <div>
    <Loading isLoading={isLoading}>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const ischeckAuth = !route.isPrivate || (user && user.isAdmin) // Check if user exists before checking isAdmin
            const Layout = route.isShowHeader ? DefaultComponent : Fragment
            return (
              <Route
                key={route.path}
                path={ischeckAuth ? route.path : '/'} // Update the condition for path rendering
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </Router>
    </Loading>
  </div>
)
}

export default App
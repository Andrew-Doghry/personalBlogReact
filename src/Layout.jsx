import { Outlet, useRouteLoaderData, useRoutes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { motion, useScroll } from "framer-motion"
function Layout() {
  const { scrollYProgress } = useScroll()

  return (

    <>

      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
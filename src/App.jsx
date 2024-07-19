
import './App.css'
import { createHashRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import Collections from './components/Collections/CollectionsMain'
import Poems from './components/Poems/Poems'
import Stories from './components/Stories/Stories'
import FollowMe from './components/FollowMe/FollowMe'
import CollectionPage from './components/Collections/CollectionPage'


const routes = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='collections' element={<Collections/>}>
        <Route path=':collectionId' element={<CollectionPage />}/>
        </Route>
      <Route path='poems' element={<Poems/>}/>
      <Route path='stories' element={<Stories/>}/>
      <Route path='followme' element={<FollowMe/>}/>
    </Route>
  )
)
function App() {
  return (
    <>
    <RouterProvider router={routes}/>

    </>
  )
}

export default App

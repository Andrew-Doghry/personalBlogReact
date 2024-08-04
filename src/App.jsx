
import './App.css'
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import Collections from './components/Collections/CollectionsMain'
import Poems from './components/Poems/poemsMain'
import FollowMe from './components/FollowMe/FollowMe'
import PoemsPage from './components/Poems/PoemsPage'
import StoriesPage from './components/Stories/StoriesPage'
import Stories from './components/Stories/storiesMain'
import CollPage from './components/Collections/CollPage'
import Loading from './components/Loading/Loading'
import { useEffect, useState } from 'react'

const routes = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      {/* <Route path='collections' element={<Collections/>}>
        <Route path=':collectionId' element={<CollectionPage />}/>
        </Route> */}
      <Route path='coll' element={<Collections />}>
        <Route path=':collId' element={<CollPage />} />
      </Route>
      <Route path='poems' element={<Poems />}>
        <Route path=':collectionId' element={<PoemsPage />} />
      </Route>
      <Route path='stories' element={<Stories />}>
        <Route path=':collectionId' element={<StoriesPage />} />
      </Route>
      <Route path='followme' element={<FollowMe />} />

    </Route>
  )
)
function App() {
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {

      setLoading(!isLoading)
    }, 3000);
  }, [])
  return (
    <>
      {/* <RouterProvider router={routes}/> */}
      {isLoading ?
        <Loading /> :
        <RouterProvider router={routes} />
      }
    </>
  )
}

export default App

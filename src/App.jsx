
import './App.css'
import Header from './components/Header'
import RootLayout from './components/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {
        path:'/login',
        element:<>login</>
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App

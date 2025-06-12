import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './components/Home.jsx'
import AddCoffee from './components/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'
import CoffeeDetails from './components/CoffeeDetails.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import axios from 'axios'
import Myadded from './components/Myadded.jsx'
import Allcoffee from './components/Allcoffee.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import MyOrders from './components/MyOrders.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: ()=> axios(`http://localhost:3000/coffees`),
        Component: Home,
      },
      {
        path: 'addCoffee',
        Component: AddCoffee,
      },
      {
        path: 'coffee/:id',
        loader: ({params})=> axios(`http://localhost:3000/coffees/${params.id}`),
        element: <PrivateRoute>
          <CoffeeDetails></CoffeeDetails>
        </PrivateRoute>
      },
      {
        path: 'updateCoffee/:id',

        Component: UpdateCoffee,
      },
      {
        path: 'mycoffees/:email',
        loader: ({params})=> axios(`http://localhost:3000/mycoffees/${params.email}`),
         element: <PrivateRoute>
          <Myadded></Myadded>
        </PrivateRoute>
      },
      {
        path: 'all-coffees',
         loader: ()=> axios(`http://localhost:3000/coffees`),
        Component:Allcoffee
      },
      {
        path: 'my-orders',
         element: <PrivateRoute>
          <MyOrders></MyOrders>
        </PrivateRoute>
      },
      {
        path: 'signin',
        Component: SignIn,
      },
      {
        path: 'signup',
        Component: SignUp,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)

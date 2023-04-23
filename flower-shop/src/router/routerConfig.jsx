import {createBrowserRouter, redirect} from 'react-router-dom'

import Auth from '../pages/Auth/Auth'
import Home from '../pages/Home/Home'


const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },

    {
        // path: '/',
        // element: <App />,
        // loader: () => {
        //   if (!localStorage.getItem('token')) {
        //     return redirect('/')
        //   } else {
        //     return null
        //   }
        // },
        children: [
          { path: '/login', element: <Auth /> },
        //   { path: '/about', element: <About /> },
        //   { path: '/resource/:resourceName', element: <Resource /> }
        ]
    }
    
])

export default appRouter
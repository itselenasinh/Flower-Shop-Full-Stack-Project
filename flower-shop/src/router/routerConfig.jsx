import {createBrowserRouter} from 'react-router-dom'

import Auth from '../pages/Auth/Auth'

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Auth />
    }
])

export default appRouter
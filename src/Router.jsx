import { createBrowserRouter } from 'react-router-dom'
import Home, { loader as clientesLoader } from './pages/Home'
import NuevoCliente, { action as actionNuevoCliente } from './pages/NuevoCliente'
import EditarCliente, { loader as editarClienteLoader, action as actionEditarCliente } from './pages/EditarCliente'
import { action as actionEliminarCliente } from './components/Cliente'
import { Layout } from './components/Layout'
import { ErrorPage } from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: clientesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: actionNuevoCliente,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: actionEditarCliente,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: actionEliminarCliente
      }
    ]
  }
])

export default router

import { useLocation, Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  const { pathname } = useLocation()
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">CRM - Clientes</h2>

        <nav className="mt-10 space-y-2">
          <Link
            className={`text-2xl block  hover:text-blue-300  ${
              pathname === '/' ? 'text-blue-300' : 'text-white'
            }`}
            to="/"
          >
            Clientes
          </Link>
          <Link
            className={`text-2xl block  hover:text-blue-300  ${
              pathname === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'
            }`}
            to="/clientes/nuevo"
          >
            Nuevo Cliente
          </Link>
        </nav>
      </aside>

      <main className="md:w-3/4 p-10 md:h-screen overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  )
}

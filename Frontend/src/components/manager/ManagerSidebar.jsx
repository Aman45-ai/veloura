
import { NavLink, useNavigate } from 'react-router-dom'
import { Home, LogOut, Leaf } from 'lucide-react'
import AuthContext from '../../context/AuthContext'
import { useContext } from 'react'
import { toast } from 'sonner'
import authApi from '../../services/auth.service'

const ManagerSidebar = () => {
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate()


  const handleLogout = async () => {
    try {
      const response = await authApi.logoutApi()
      toast.success(response.data.message)
    } catch (error) {
      console.error('Backend logout failed:', error)
      toast.error('Server logout failed. Please try again.')
    } finally {
      logout()
      navigate('/login')
    }
  }
  return (
    <aside className="w-64 shrink-0 border-r border-[#2a2420] bg-[#0d0c0a] flex flex-col justify-between py-6 px-5 min-h-screen">

      <div>

        <div className="flex items-center gap-2 mb-1">
          <Leaf className="text-[#d4a349]" size={22} />
          <span className="text-xl font-serif text-white">
            Veloura
          </span>
        </div>

        <p className="text-[10px] tracking-[0.25em] text-neutral-400 ml-1 mb-8">
          DINE &middot; DISCOVER &middot; BELONG
        </p>

        <nav className="space-y-1">
          <NavLink
            to="/manager"
            end
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm border transition-all duration-300 ${isActive
                ? 'bg-[#2a2013] text-[#e8bd6d] border-[#d4a349]/40'
                : 'border-transparent text-neutral-300 hover:bg-white/5 hover:text-[#e8bd6d]'
              }`
            }
          >
            <Home size={17} />
            Dashboard
          </NavLink>
        </nav>
      </div>


      <div>
        <div className="h-px bg-[#2a2420] mb-4" />

        <button
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl border border-transparent text-sm text-neutral-300 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20 transition-all duration-300 cursor-pointer"
        >
          <LogOut size={17} />
          Logout
        </button>
      </div>

    </aside>
  )
}

export default ManagerSidebar

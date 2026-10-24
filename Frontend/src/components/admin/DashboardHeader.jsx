import { Bell } from 'lucide-react';
import AuthContext from '../../context/AuthContext'
import { useContext } from 'react'
import { toast } from 'sonner'
import authApi from '../../services/auth.service'
import { useNavigate } from 'react-router-dom';

const DashboardHeader = () => {
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
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="font-serif text-3xl text-white flex items-center gap-2">
          Good evening, Admin <span>🌿</span>
        </h1>
        <p className="text-neutral-400 text-sm mt-1">An overview of Veloura today.</p>
      </div>

      <div className="flex items-center gap-5">
        <button className="relative w-10 h-10 rounded-full border border-[#2a2420] flex items-center justify-center hover:bg-white/5 transition">
          <Bell size={17} className="text-white" />
          <span className="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-[#d4a349]" />
        </button>
        <div className="flex items-center gap-2 text-white">
          <div className="w-9 h-9 rounded-full border border-[#2a2420] flex items-center justify-center text-sm">
            A
          </div>
          <button
          onClick={handleLogout}
          className="group rounded-sm border border-white/20 px-6 py-2.5 text-sm tracking-[0.18em] text-white/75 transition-all duration-300 hover:border-[#dea869]/70 hover:bg-[#dea869]/10 hover:text-[#dea869] active:scale-95 cursor-pointer"        >
          Logout
        </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
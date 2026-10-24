import { Bell, ChevronDown } from 'lucide-react'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

const ManagerDashboardHeader = () => {
  const { role } = useContext(AuthContext)

  const managerName = role === 'manager' ? 'Manager' : 'Admin'

  const getGreeting = () => {
    const hour = new Date().getHours()

    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    return 'Good evening'
  }

  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="font-serif text-3xl text-white flex items-center gap-2">
          {getGreeting()}, {managerName} <span>🌿</span>
        </h1>

        <p className="text-neutral-400 text-sm mt-1">
          An overview of Veloura today.
        </p>
      </div>
    </div>
  )
}

export default ManagerDashboardHeader
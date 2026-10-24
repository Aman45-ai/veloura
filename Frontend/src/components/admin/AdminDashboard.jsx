import { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import HeroBanner from './HeroBanner';
import ManagerOverview from './ManagerOverview';


const AdminDashboard = () => {
  const [active, setActive] = useState('Dashboard');

  return (
    <div className="min-h-dvh bg-[#0d0c0a] flex">
      <main className="flex-1 p-8 overflow-y-auto">
        <DashboardHeader />
        <HeroBanner />

        <div className="flex gap-6">
          <div className="w-full shrink-0">
            <ManagerOverview />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
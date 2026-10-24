import { useState } from 'react';
import ManagerSidebar from './ManagerSidebar';
import ManagerDashboardHeader from './ManagerDashboardHeader';
import ManagerHeroBanner from './ManagerHeroBanner';

import ManagerRecentReservations from './ManagerRecentReservations';



const ManagerDashboard = () => {
  const [active, setActive] = useState('Dashboard');

  return (
    <div className="min-h-dvh bg-[#0d0c0a] flex">
      <ManagerSidebar active={active} setActive={setActive} />
      <main className="flex-1 p-8 overflow-y-auto">
        <ManagerDashboardHeader />
        <ManagerHeroBanner />

        <div className="flex gap-6">
          <ManagerRecentReservations />
        </div>
      </main>
    </div>
  );
};

export default ManagerDashboard;
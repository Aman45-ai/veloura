import { Settings, Calendar, Utensils, Leaf } from 'lucide-react';
import background from '../../assets/background.png';

const features = [
  {
    icon: Settings,
    title: 'Operational Access',
    description: 'Manage day-to-day activities',
  },
  {
    icon: Calendar,
    title: 'Handle Reservations',
    description: 'View and manage bookings',
  },
  {
    icon: Utensils,
    title: 'Menu Management',
    description: 'Update and manage menu items',
  },
];

const CreateManagerInfoPanel = () => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-[#2a2420] min-h-full flex flex-col justify-end p-8 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(5,5,4,0.3) 0%, rgba(5,5,4,0.85) 65%, rgba(5,5,4,0.97) 100%), url(${background})`,
      }}
    >
      <Leaf className="text-[#d4a349] mb-6" size={28} />

      <div className="flex items-center gap-3 mb-3">
        <span className="w-6 h-px bg-[#d4a349]" />
        <span className="text-xs tracking-[0.25em] text-neutral-300">
          EMPOWER YOUR TEAM
        </span>
      </div>

      <h2 className="font-serif text-3xl text-white mb-3 leading-tight">
        Assign Management Access
      </h2>
      <p className="text-neutral-300 text-sm mb-8 max-w-md">
        Managers can handle daily operations, including reservations, menu
        updates, and customer management, while keeping your restaurant
        running smoothly.
      </p>

      <div className="space-y-5">
        {features.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-start gap-4">
            <div className="w-11 h-11 shrink-0 rounded-full border border-[#d4a349]/50 flex items-center justify-center">
              <Icon size={18} className="text-[#d4a349]" />
            </div>
            <div>
              <p className="text-white font-medium">{title}</p>
              <p className="text-sm text-neutral-400">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateManagerInfoPanel;
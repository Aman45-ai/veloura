import background from '../../assets/background.png'

const ManagerHeroBanner = () => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden mb-6 min-h-55 flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(5,5,4,0.92) 30%, rgba(5,5,4,0.55) 70%, rgba(5,5,4,0.15) 100%), url(${background})`,
      }}
    >
      <div className="px-8 py-8 max-w-xl">
        <span className="inline-block text-[11px] tracking-[0.2em] text-[#d4a349] border border-[#d4a349]/40 rounded-full px-3 py-1 mb-4">
          MANAGER
        </span>
        <h2 className="font-serif text-3xl text-white mb-2">
          Hospitality, thoughtfully managed.
        </h2>
        <p className="text-neutral-300 text-sm">
          Manage reservations, confirm guest bookings, and deliver exceptional
          dining experiences at Veloura.
        </p>
        <span className="block w-8 h-px bg-[#d4a349] mt-4" />
      </div>
    </div>
  );
};

export default ManagerHeroBanner;
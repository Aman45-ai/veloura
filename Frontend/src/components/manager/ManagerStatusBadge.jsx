const statusStyles = {
  Pending: 'bg-[#3a2a10] text-[#e0ac4f] border border-[#e0ac4f]/30',
  Confirmed: 'bg-[#10301f] text-emerald-400 border border-emerald-400/30',
  Rejected: 'bg-[#3a1414] text-red-400 border border-red-400/30',
};

const ManagerStatusBadge = ({ status }) => {
  return (
    <span className={`text-xs px-3 py-1 rounded-full ${statusStyles[status]}`}>
      {status}
    </span>
  );
};

export default ManagerStatusBadge;
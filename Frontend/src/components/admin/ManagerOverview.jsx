import { ArrowRight, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ManagerOverview = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-[#141210] border border-[#2a2420] rounded-2xl p-6 mb-4">
      

      <button className="w-full py-2.5 rounded-full bg-linear-to-r from-[#e8bd6d] to-[#d59533] text-black text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition cursor-pointer" 
      onClick={()=>{
        navigate('/admin/create-manager-id')
      }}>
        <UserPlus size={15} />
        Create Manager Account <ArrowRight size={14} />
      </button>
    </div>
  );
};

export default ManagerOverview;
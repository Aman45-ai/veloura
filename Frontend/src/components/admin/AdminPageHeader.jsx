import { ChevronRight } from 'lucide-react';

const AdminPageHeader = ({ title, subtitle, breadcrumb = [] }) => {
  return (
    <div className="flex items-start justify-between mb-8">
      <div>
        <h1 className="font-serif text-3xl text-white mb-1">{title}</h1>
        <p className="text-neutral-400 text-sm">{subtitle}</p>
      </div>

      <div className="flex items-center gap-2 text-sm">
        {breadcrumb.map((item, index) => {
          const isLast = index === breadcrumb.length - 1;
          return (
            <span key={item} className="flex items-center gap-2">
              <span className={isLast ? 'text-[#d4a349]' : 'text-neutral-400'}>
                {item}
              </span>
              {!isLast && (
                <ChevronRight size={14} className="text-neutral-600" />
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default AdminPageHeader;
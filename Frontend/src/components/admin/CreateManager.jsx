import AdminPageHeader from './AdminPageHeader';
import CreateManagerForm from './CreateManagerForm';
import CreateManagerInfoPanel from './CreateManagerInfoPanel';

const CreateManager = () => {
  return (
    <div className="min-h-dvh bg-[#0d0c0a] p-8">
      <AdminPageHeader
        title="Create Manager"
        subtitle="Create a new manager account to give them access to manage daily operations."
        breadcrumb={['Dashboard', 'Create Manager']}
      />

      <div className="grid grid-cols-2 gap-6 items-stretch">
        <CreateManagerForm />
        <CreateManagerInfoPanel />
      </div>
    </div>
  );
};

export default CreateManager;
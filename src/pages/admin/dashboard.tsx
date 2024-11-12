import AdminLayout from '@/ui/layouts/AdminLayout';
import { ReactElement } from 'react';

export default function Dashboard() {
  return <div className="flex items-center justify-center h-[120vh]">Welcome!!!</div>;
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

Dashboard.auth = true;

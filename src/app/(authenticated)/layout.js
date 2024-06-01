import Sidebar from "@/components/Sidebar/Sidebar";

export default function AuthenticatedLayout({ children }) {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}

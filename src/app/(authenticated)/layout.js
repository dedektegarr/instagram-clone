import Sidebar from "@/components/Sidebar/Sidebar";

export default function AuthenticatedLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full">
        <div className="max-w-5xl mx-auto gap-4 py-10 px-4">{children}</div>
      </main>
    </div>
  );
}

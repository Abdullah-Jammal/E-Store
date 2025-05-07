import SideBarComponent from "./Sidebar";
import Navbar from "@/components/navbar/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <Navbar/>
      <h2 className="mt-12 pb-1 border-b-1 w-fit">DashBoard</h2>
      

      <section className="grid lg:grid-cols-12 gap-12 mt-12">
        <div className="lg:col-span-2">
          <SideBarComponent />
        </div>
        <div className="lg:col-span-10 px-4">{children}</div>
      </section>
    </main>
  );
}

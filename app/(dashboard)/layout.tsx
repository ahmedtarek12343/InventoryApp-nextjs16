import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Sidebar from "@/components/sidebar";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <SidebarProvider>
        <Sidebar />
        <SidebarInset className="m-3 rounded-2xl">
          <SidebarTrigger className="self-start" />
          <main>{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default layout;

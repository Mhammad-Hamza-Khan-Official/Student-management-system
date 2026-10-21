import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";

export default function DashboardLayout() {
    return (
        <>
            <div className="min-h-screen bg-background font-sans text-foreground">
                <div className="flex min-h-screen">
                    <Sidebar />

                    <main className="min-w-0 flex-1">
                        <Header />

                        <div className="mx-auto lg:ml-54 ml-0 mt-20 max-w-[1600px] space-y-5 p-4 sm:p-6 lg:p-7">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

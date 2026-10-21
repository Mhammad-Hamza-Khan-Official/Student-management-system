import { Users } from "lucide-react";

export default function Header({ title = "Dashboard" }) {
    return (
        <header className="fixed lg:left-56 left-0  right-0 top-0 z-30 flex h-[76px] items-center justify-between border-b border-border bg-surface px-4 sm:px-6 lg:px-8">
            {/* Page title */}
            <div className="min-w-0">
                <h2 className="truncate text-lg font-bold text-foreground">
                    {title}
                </h2>

                <p className="hidden text-xs text-muted sm:block">
                    Manage your students and attendance
                </p>
            </div>

            {/* Profile */}
            <div className="ml-3 flex shrink-0 items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary">
                    <Users size={18} />
                </div>

                <div className="hidden sm:block">
                    <p className="text-xs font-semibold text-foreground">
                        Welcome
                    </p>
                    <p className="text-[11px] text-muted">
                        Administrator
                    </p>
                </div>
            </div>
        </header>
    );
}

export const buttonClasses =
    "inline-flex items-center justify-center gap-2 rounded-button bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover";

export const inputClasses =
    "w-full rounded-input border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted outline-none focus:border-primary focus:ring-1 focus:ring-primary";

export function FormField({ label, required = true, children }) {
    return (
        <label className="block min-w-0 space-y-2">
            <span className="block text-sm font-semibold text-foreground">
                {label}
                {required && <span className="ml-1 text-danger">*</span>}
            </span>
            {children}
        </label>
    );
}

export function StatCard({ icon: Icon, label, value, color }) {
    const colors = {
        blue: "bg-primary",
        green: "bg-success",
        red: "bg-danger",
    };

    return (
        <article className="flex items-center gap-4 rounded-card border border-border bg-surface p-5 shadow-card">
            <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white ${colors[color]}`}
            >
                <Icon size={24} />
            </div>

            <div>
                <p className="text-sm text-muted">{label}</p>
                <p className="mt-1 text-2xl font-bold tracking-tight text-foreground">
                    {value}
                </p>
            </div>
        </article>
    );
}

export function PageCard({ children, className = "" }) {
    return (
        <section
            className={`rounded-card border border-border bg-surface shadow-card ${className}`}
        >
            {children}
        </section>
    );
}

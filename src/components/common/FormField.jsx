export default function FormField({ label, children }) {
    return (
        <label className="block space-y-2">
            <span className="block text-sm font-semibold text-foreground">
                {label} <span className="text-danger">*</span>
            </span>

            {children}
        </label>
    );
}
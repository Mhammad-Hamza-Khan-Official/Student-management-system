
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    GraduationCap,
    Mail,
    LockKeyhole,
    Eye,
    EyeOff,
    BookOpen,
    UserRound,
    Leaf,
} from "lucide-react";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
            remember: false,
        },
    });

    const onSubmit = async (data) => {
        console.log("Login data:", data);
        // Connect your authentication API or Firebase here.
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-background p-4 sm:p-6">
            <section className="grid w-full max-w-6xl overflow-hidden rounded-2xl border border-border bg-surface shadow-card lg:min-h-[680px] lg:grid-cols-2">
                {/* Welcome Panel */}
                <aside className="relative hidden overflow-hidden bg-sidebar p-8 text-white sm:flex sm:flex-col sm:justify-between lg:p-12">
                    <div className="flex items-center gap-3">
                        <GraduationCap size={42} className="text-primary" />
                        <h1 className="text-sm font-bold leading-5">
                            Student
                            <br />
                            Management System
                        </h1>
                    </div>

                    <div className="relative z-10 max-w-sm">
                        <h2 className="mb-4 text-3xl font-bold leading-tight">
                            Welcome Back,
                            <span className="block text-primary">Student!</span>
                        </h2>
                        <p className="text-sm leading-6 text-slate-300">
                            Sign in to access your dashboard, view your attendance and more.
                        </p>

                        {/* Decorative illustration */}
                        <div className="relative mt-8 flex h-64 items-center justify-center">
                            <div className="absolute h-56 w-56 rounded-full bg-primary/10" />

                            <div className="relative flex flex-col items-center">
                                <GraduationCap
                                    size={100}
                                    strokeWidth={1.5}
                                    className="text-primary drop-shadow-lg"
                                />

                                <div className="-mt-3 flex flex-col gap-1">
                                    <div className="h-4 w-40 -skew-x-6 rounded-sm bg-blue-400 shadow-md" />
                                    <div className="h-4 w-48 -skew-x-6 rounded-sm bg-slate-200 shadow-md" />
                                    <div className="h-4 w-44 -skew-x-6 rounded-sm bg-blue-600 shadow-md" />
                                    <div className="h-4 w-48 -skew-x-6 rounded-sm bg-slate-100 shadow-md" />
                                    <div className="h-4 w-44 -skew-x-6 rounded-sm bg-blue-700 shadow-md" />
                                </div>
                            </div>

                            <Leaf
                                size={66}
                                className="absolute bottom-10 right-3 rotate-12 text-emerald-400"
                            />
                        </div>
                    </div>

                    <p className="text-[11px] text-slate-400">
                        © 2026 Student Management System. All rights reserved.
                    </p>
                </aside>

                {/* Login Form */}
                <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
                    <div className="w-full max-w-md">
                        <div className="mb-8 flex items-center gap-3">
                            <GraduationCap className="text-primary" size={38} />
                            <span className="text-sm font-bold text-foreground">
                                Student Management System
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-foreground">
                            Student Login
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-muted">
                            Enter your email and password to continue.
                        </p>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="mt-8 space-y-6"
                        >
                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    Email Address
                                </label>

                                <div className="flex items-center gap-3 rounded-md border border-border bg-background px-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                                    <Mail size={18} className="shrink-0 text-muted" />
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        autoComplete="email"
                                        aria-invalid={!!errors.email}
                                        className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted"
                                        {...register("email", {
                                            required: "Email address is required.",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Enter a valid email address.",
                                            },
                                        })}
                                    />
                                </div>

                                {errors.email && (
                                    <p className="mt-1 text-xs text-danger">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    Password
                                </label>

                                <div className="flex items-center gap-3 rounded-md border border-border bg-background px-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                                    <LockKeyhole
                                        size={18}
                                        className="shrink-0 text-muted"
                                    />

                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                        aria-invalid={!!errors.password}
                                        className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted"
                                        {...register("password", {
                                            required: "Password is required.",
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters.",
                                            },
                                        })}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="shrink-0 text-muted transition hover:text-primary"
                                        aria-label={
                                            showPassword ? "Hide password" : "Show password"
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>

                                {errors.password && (
                                    <p className="mt-1 text-xs text-danger">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            {/* Remember & Forgot Password */}
                            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                                <label className="flex cursor-pointer items-center gap-2 text-muted">
                                    <input
                                        type="checkbox"
                                        className="size-4 accent-primary"
                                        {...register("remember")}
                                    />
                                    Remember me
                                </label>

                                <a
                                    href="/forgot-password"
                                    className="font-medium text-primary hover:text-primary-hover"
                                >
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isSubmitting ? "Logging in..." : "Login"}
                            </button>
                        </form>

                        <div className="my-8 flex items-center gap-4">
                            <div className="h-px flex-1 bg-border" />
                            <span className="text-xs font-medium text-muted">OR</span>
                            <div className="h-px flex-1 bg-border" />
                        </div>

                        <p className="text-center text-sm text-muted">
                            Don't have an account?{" "}
                            <a
                                href="/register"
                                className="font-semibold text-primary hover:text-primary-hover"
                            >
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

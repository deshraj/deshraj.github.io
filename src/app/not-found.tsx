import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-4xl font-semibold tracking-tight mb-2">404</h1>
      <p className="text-muted mb-6">This page doesn't exist.</p>
      <Link
        href="/"
        className="text-sm underline underline-offset-4 decoration-border hover:decoration-primary transition-colors"
      >
        Go home
      </Link>
    </div>
  );
}

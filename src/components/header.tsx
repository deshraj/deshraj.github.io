import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  return (
    <header className="mb-16">
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-primary"
        >
          Deshraj Yadav
        </Link>
        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 pt-8 border-t border-border">
      <div className="flex items-center justify-between text-sm text-muted">
        <span>© {new Date().getFullYear()} Deshraj Yadav</span>
        <div className="flex gap-5">
          <a
            href="https://twitter.com/deshrajdry"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://github.com/DESHRAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/deshraj-yadav-34325975"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://scholar.google.com/citations?user=T9QZ6sIAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Scholar
          </a>
          <a href="/feed.xml" className="hover:text-primary transition-colors">
            RSS
          </a>
        </div>
      </div>
    </footer>
  );
}

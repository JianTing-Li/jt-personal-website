import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border px-7 py-7 text-center">
      <p className="text-[13px] text-text-muted">
        &copy; {new Date().getFullYear()} {siteConfig.name}
      </p>
    </footer>
  );
}

import { navItems } from "@/data/nav";

export function DesktopNav() {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-[15px] font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

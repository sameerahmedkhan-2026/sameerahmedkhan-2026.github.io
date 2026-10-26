const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Blog", href: "#blog" },
  { label: "Courses", href: "#courses" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  return (
    <nav className="site-nav" aria-label="Primary">
      {navigationItems.map((item) => (
        <a href={item.href} key={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

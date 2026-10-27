import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navigationItems = [
  { label: "Home", to: "/", type: "route" },
  { label: "Blog", section: "blog", type: "section" },
  { label: "Courses", to: "/courses", type: "route" },
  { label: "Contact", section: "contact", type: "section" },
];

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleSectionClick(event, section) {
    event.preventDefault();

    if (location.pathname !== "/") {
      navigate("/", { state: { section } });
      window.setTimeout(() => {
        document.getElementById(section)?.scrollIntoView();
      }, 0);
      return;
    }

    document.getElementById(section)?.scrollIntoView();
  }

  return (
    <nav className="site-nav" aria-label="Primary">
      {navigationItems.map((item) =>
        item.type === "route" ? (
          <Link to={item.to} key={item.label}>
            {item.label}
          </Link>
        ) : (
          <a
            href="/"
            key={item.label}
            onClick={(event) => handleSectionClick(event, item.section)}
          >
            {item.label}
          </a>
        ),
      )}
      <ThemeToggle />
    </nav>
  );
}

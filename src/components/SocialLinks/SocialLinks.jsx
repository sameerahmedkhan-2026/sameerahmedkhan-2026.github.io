import SocialIcon from "../SocialIcon/SocialIcon";
import "./SocialLinks.css";

const links = [
  { name: "twitter", href: "#", label: "Twitter/X", disabled: true },
  { name: "github", href: "https://github.com/sameerahmedkhan", label: "Github" },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/knowsameer/",
    label: "LinkedIn",
  },
  {
    name: "email",
    href: "mailto:sameer.cse.jobs@gmail.com",
    label: "Email",
  },
];

export default function SocialLinks({ footer = false }) {
  return (
    <ul className={footer ? "icons" : "social-icons"}>
      {links.map((link) => (
        <li key={link.name}>
          {link.disabled ? (
            <span className="social-disabled" aria-hidden="true">
              <SocialIcon
                name={link.name}
                className={footer ? "social" : "svg-icon"}
              />
            </span>
          ) : (
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              <SocialIcon name={link.name} className={footer ? "social" : "svg-icon"} />
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

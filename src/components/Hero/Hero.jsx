import SocialLinks from "../SocialLinks/SocialLinks";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="wrapper" id="home">
      <div>
        <h2>Software Engineer</h2>
        <h1>Sameer Ahmed Khan</h1>
        <p>
          I’m a web architect who builds scalable, accessible, and
          high-performance web applications.
        </p>
        <p>
          I specialize in React, JavaScript, TypeScript, the MERN stack, and
          microfrontend architecture.
        </p>
        <p>
          I also work with AI-assisted workflows, web modernization, and
          performance-focused engineering.
        </p>
        <p>
          Have a project in mind or a team ready to grow? Let&apos;s build
          something thoughtful, scalable, and genuinely useful.
        </p>
        <SocialLinks />
      </div>
      <div>
        <img
          className="profile"
          src="/assets/profile-photo-cartoon.jpeg"
          alt="Sameer Ahmed Khan"
        />
      </div>
    </div>
  );
}

import SocialLinks from "../SocialLinks/SocialLinks";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <footer>
        <h2 className="h2-footer">Other Projects</h2>
        <div className="footer-text">
          <div className="footer-text-box">
            <h3 id="blog">Blogging:</h3>
            <ul>
              <li>
                <a href="https://medium.com/@sameer_cse" target="_blank" rel="noreferrer">
                  Medium
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-text-box">
            <h3 id="courses">Courses:</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/sameerahmedkhan-2026/intro-to-web-development-v1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Introduction to web development
                </a>
              </li>
              <li>
                <a href="#" className="social-disabled" aria-hidden="true">
                  Complete Intro to React
                </a>
              </li>
              <li>
                <a href="#" className="social-disabled" aria-hidden="true">
                  Webstorage &amp; PWAs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h2 className="h2-footer" id="contact">
          Contact
        </h2>
        <div className="footer-text">
          <SocialLinks footer />
        </div>
      </footer>
    </div>
  );
}

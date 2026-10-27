import { useState } from "react";
import "./Contact.css";

const contactEmail = "sameer.cse.jobs@gmail.com";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = `Website message from ${name}`;
    const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      <header className="contact-header">
        <p className="eyebrow">Let&apos;s connect</p>
        <h1>Contact</h1>
        <p>
          Have a project in mind, want to collaborate, or simply want to say
          hello? Send a message and I&apos;ll get back to you.
        </p>
      </header>

      <div className="contact-layout">
        <section className="contact-details" aria-labelledby="contact-details-title">
          <h2 id="contact-details-title">Contact details</h2>
          <p>
            The best way to reach me is by email. You can also find me on
            GitHub and LinkedIn.
          </p>
          <dl>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </dd>
            </div>
            
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a href="https://www.linkedin.com/in/knowsameer/" target="_blank" rel="noreferrer">
                  linkedin.com/in/knowsameer
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section className="contact-form-section" aria-labelledby="message-title">
          <h2 id="message-title">Send a message</h2>
          <p className="contact-form-note">
            This form opens your email app with the message details filled in.
          </p>
          <form onSubmit={handleSubmit}>
            <label>
              Your name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Email address
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="6" required />
            </label>
            <button type="submit">Send message <span aria-hidden="true">→</span></button>
            {submitted && (
              <p className="form-status" role="status">
                Your email app should open with the message ready to send.
              </p>
            )}
          </form>
        </section>
      </div>
    </main>
  );
}

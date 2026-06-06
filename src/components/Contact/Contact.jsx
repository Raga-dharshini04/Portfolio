import "./contact.css";
import { FaComments } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>

        <div className="contact-wrapper">

          {/* LEFT SIDE */}

          <div className="contact-left">
            <div className="conversation-card">

              <div className="conversation-icon">
                <FaComments />
              </div>

              <h3>Let's Have A Convo</h3>

              <p className="conversation-quote">
                "Every great application starts with a conversation.
                Got an idea, or opportunity ? Let's talk."
              </p>

              <div className="typing-animation">
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact-form"
          >
            <input
              type="hidden"
              name="access_key"
              value={import.meta.env.VITE_WEB3FORMS_KEY}
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
            />

            <button type="submit">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
import { useState } from "react";
import axios from "axios";
import "./contact.css";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/contact", {
        subject,
        email,
        message,
      });
      setSubject("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="contactDiv">
      <form className="contactForm" onSubmit={handleSubmit}>
        <h2>Envíanos tu consulta</h2>
        <label htmlFor="subject">Nombre:</label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={subject}
          onChange={handleSubjectChange}
          required
        />
        <label htmlFor="email">Correo:</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="message">Mensaje:</label>
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={handleMessageChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;

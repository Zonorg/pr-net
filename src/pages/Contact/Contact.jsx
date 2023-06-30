import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Modal, Button } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("pr-net", "template_fhxb9v6", form.current, "0Tau1YkFkZjIpRknq").then(
      (result) => {
        console.log(result.text);
        handleShowModal();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contactDiv">
      <h2>Contactanos</h2>
      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <h2>Dejanos tus datos y nosotros te contactaremos para resolver tus consultas</h2>
        <p>¡Te responderemos en brevedad!</p>
        <label htmlFor="subject">Nombre:</label>
        <input type="text" id="name" name="user_name" required />
        <label>Empresa:</label>
        <input type="text" name="user_company" id="company" required />
        <label>Correo:</label>
        <input type="email" name="user_email" id="email" required />
        <label>Teléfono:</label>
        <input type="tel" name="user_phone" id="phone" required />
        <label>Mensaje:</label>
        <textarea name="message" id="message" required />
        <button type="submit" value="Send">
          Enviar
        </button>
      </form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">¡Mensaje enviado!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Su mensaje ha sido enviado correctamente.</p>
          <p>En breves nos comunicaremos con usted para resolver sus dudas.</p>
        </Modal.Body>
        <Modal.Footer className="text-center">
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;

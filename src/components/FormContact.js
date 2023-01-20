import "./FormContact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const FormContact = ({ language }) => {
  const form = useRef();

  //We use EmailJS API to send the mail to myself
  const sendEmail = async (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    await emailjs.sendForm(
      "service_fmg8jae",
      "template_284npt8",
      form.current,
      "Zdyfn-Af_cgaZPmUu"
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <fieldset className="fullname">
        <fieldset className="firstname">
          <label htmlFor="firstname">
            {language == "ES" ? "Nombre" : "First Name"}
          </label>
          <input type="name" id="firstname" name="firstname" />
        </fieldset>
        <fieldset className="lastname">
          <label htmlFor="lastname">
            {language == "ES" ? "Apellido" : "Last Name"}
          </label>
          <input type="name" id="lasttname" name="lastname" />
        </fieldset>
      </fieldset>
      <fieldset className="contact-data">
        <fieldset className="email">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />
        </fieldset>
        <fieldset className="subject">
          <label htmlFor="subject">
            {language == "ES" ? "Asunto" : "Subject"}
          </label>
          <input type="name" id="subject" name="subject" />
        </fieldset>
      </fieldset>
      <fieldset className="content">
        <fieldset className="text">
          <label htmlFor="message">
            {language == "ES" ? "Mensaje" : "Message"}
          </label>
          <textarea id="message" name="message" />
        </fieldset>
        <button>{language == "ES" ? "Enviar" : "Send"}</button>
      </fieldset>
    </form>
  );
};
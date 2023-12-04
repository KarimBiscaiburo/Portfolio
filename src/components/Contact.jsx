import "../styles/contact.css"

export default function Contact() {
    return (
        <section className="section" id="contact">
          <h2>Contacto</h2>

          <form className="contact-form">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email"/>

              <label htmlFor="message">Mensaje</label>
              <textarea name="message" id="message"></textarea>

              <button type="submit">Enviar</button>
          </form>
        </section>
    )
}
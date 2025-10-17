function Contact() {
  return (
    <section>
      <h2>Formulaire de fans</h2>
      <form>
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Prénom" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Vous supportez quelle équipe ?" />
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
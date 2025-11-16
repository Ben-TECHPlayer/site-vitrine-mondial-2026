<<<<<<< HEAD
function Formulaire() {
    return (
    <section>
        <h2>Contactez-nous</h2>
        <form method="post">
            <input type="text" id="last-name" name="nom" placeholder="Votre nom" />
            <input type="text" id="first-name" name="prenom" placeholder="Votre prénom" />
            <input type="email" id="mail" name="adresse-mail" placeholder="Votre adresse-mail" />
            <textarea id="message" name="avis" rows="6" placeholder="Votre message"></textarea>
            <input type="submit" id="envoyer" name="validation" value="Envoyer"/>
        </form>
    </section>
    );
}

export default Formulaire;
=======
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
>>>>>>> 72216bc7c31fbfb498b4534d5bcf1d64f5b58a84

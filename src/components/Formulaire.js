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
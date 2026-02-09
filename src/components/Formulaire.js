function Formulaire() {
    return (
    <section>
        <form method="post">
            <legend>Choisissez votre équipe !</legend>
            <input type="text" id="last-name" name="nom" placeholder="Votre nom" />
            <input type="text" id="first-name" name="prenom" placeholder="Votre prénom" />
            <input type="email" id="mail" name="adresse-mail" placeholder="Votre adresse-mail" />
            <select name="pets" id="pet-select">
                <option value="">Votre équipe préférée</option>
                <option value="mexique">Mexique</option>
                <option value="usa">Etats-Unis</option>
                <option value="canada">Canada</option>
                <option value="france">France</option>
                <option value="germany">Allemagne</option>
                <option value="south-korea">Corée du Sud</option>
                <option value="spain">Espagne</option>
                <option value="england">Angleterre</option>
                <option value="argentina">Argentine</option>
                <option value="brazil">Brésil</option>
                <option value="switzerland">Suisse</option>
                <option value="croatia">Croatie</option>
                <option value="qatar">Qatar</option>
                <option value="south-africa">Afrique du Sud</option>
                <option value="scotland">Ecosse</option>
                <option value="paraguay">Paraguay</option>
                <option value="australia">Australie</option>
                <option value="haitian">Haïti</option>
                <option value="ecuador">Équateur</option>
                <option value="ivory-coast">Côte d'Ivoire</option>
                <option value="curacao">Curaçao</option>
                <option value="belgium">Belgique</option>
                <option value="egypt">Égypte</option>
                <option value="netherlands">Pays-Bas</option>
                <option value="portugal">Portugal</option>
                <option value="saudi-arabia">Arabie Saoudite</option>
                <option value="iran">Iran</option>
                <option value="japan">Japon</option>
                <option value="tunisia">Tunisie</option>
                <option value="uruguay">Uruguay</option>
                <option value="norway">Norvège</option>
                <option value="poland">Pologne</option>
                <option value="senegal">Sénégal</option>
                <option value="algeria">Algérie</option>
                <option value="colombia">Colombie</option>
                <option value="jordanie">Jordanie</option>
                <option value="new-zealand">Nouvelle-Zélande</option>
                <option value="cape-verde">Cap-Vert</option>
                <option value="ghana">Ghana</option>
                <option value="panama">Panama</option>
                <option value="austria">Autriche</option>
            </select>
            {/* tel: 0744271594 */}
            <textarea id="message" name="avis" rows="6" placeholder="Votre message"></textarea>
            <input type="submit" id="envoyer" name="validation" value="Envoyer"/>
        </form>
        <p><i>Note: Missing data for qualifiedteams will be updated soon(after qualifying round).</i></p>
    </section>
    );
}

export default Formulaire;

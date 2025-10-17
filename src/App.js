import Header from './components/Header';
import Footer from './components/Footer';

import Annonce from './components/Annonce';
import Formulaire from './components/Formulaire';

import './styles/Footer.css';
import './styles/Header.css';
import './styles/index.css';
import './styles/Annonce.css';
import './styles/Formulaire.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Annonce />
      <Formulaire />
      <Footer />
    </div>
  );
}

export default App;

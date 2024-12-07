import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faHeart,
  faInfo,
} from "@fortawesome/free-solid-svg-icons"; // İkonu import et

import myBanner from "./banner.jpg";
import myButton from "./button.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={myBanner} className="Banner" alt="Banner" />
        <a
          href="https://www.darussafaka.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{ marginTop: -8 }}
            src={myButton}
            className="Banner"
            alt="BUTTON"
          />
        </a>
        <div className="bagisAdımı">
          <a href="https://www.darussafaka.org/yol-arkadasim-duzenli-bagis">
            <FontAwesomeIcon icon={faHeart} />
            <span>Regular Monthly Donation </span>
          </a>
          <a href="https://www.darussafaka.org/bagislariniz/bagis-kanallari#5e15981b1e76d61bbbcc90f1">
            <FontAwesomeIcon icon={faCreditCard} /> <span>Account Numbers</span>
          </a>
          <a href="https://www.darussafaka.org/bagis?c=ozel-gun-bagislari">
            <FontAwesomeIcon icon={faInfo} />
            <span>Special Day Donations </span>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;

// Imports

// Components
import Header from "./components/header.jsx";
import CountdownTimer from "./components/countdown";
import Guestbook from "./components/guestbook";

// CSS
import "./App.css";
import "./styles/header.css";
import "./styles/guestbook.css";
import "./styles/countdown.css";

function App() {
  return (
    <>
      <Header />
      <CountdownTimer />
      <Guestbook />
    </>
  );
}

export default App;

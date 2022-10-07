import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="text-center">
          Coded by{" "}
          <a
            href="https://github.com/HinaChoudhry"
            target="_blank"
            rel="noreferrer"
          >
            Hina Choudhry
          </a>
        </footer>
      </div>
    </div>
  );
}

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./Content";

export default function App() {
  return (
    <div className="App">
      <Content defaultCity="Berlin" />
      <footer>
        <a
          href="https://github.com/eliachow/weather-app-react-b"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open source code
        </a>{" "}
        by Elia Chow
      </footer>
    </div>
  );
}

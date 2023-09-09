import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./components/Content"

export default function App() {
  return (
    <div className="App">
      <Content defaultCity="Berlin" />
    </div>
  );
}

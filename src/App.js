import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import CarouselMain from "./components/CarouselMain";
import "normalize.css/normalize.css";
//import "./styles/styles.scss";

function App() {
  return (
    <body>
      <Header />
      <CarouselMain />
      <Main />
      <Header />
    </body>
  );
}

export default App;

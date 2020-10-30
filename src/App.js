import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import CarouselMain from "./components/CarouselMain";
import "normalize.css/normalize.css";
//import "./styles/styles.scss";
import Footer from "./components/Footer";
import Categories from "./components/Categories";

function App() {
  return (
    <body>
      <Header />
      <CarouselMain />
      <Categories />
      <Footer />
    </body>
  );
}

export default App;

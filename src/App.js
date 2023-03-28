import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Slide from "./components/Slide";
import SubHeading from "./components/SubHeading";

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeading/>
      <Slide/>
      <Main />
      <Footer/>
    </div>
  );
}

export default App;

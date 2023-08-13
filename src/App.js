import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routers/Router";
import Home from "./pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

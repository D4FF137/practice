import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "../src/components/header";
import Main from "../src/components/main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../src/components/footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;

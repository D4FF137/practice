import "../assets/style.css";
import { Form, Button } from "react-bootstrap";
import logo from "../assets/media/logo.png";
import social1 from "../assets/media/social-1.svg";
import social2 from "../assets/media/social-2.svg";
import social3 from "../assets/media/social-3.svg";
import social4 from "../assets/media/social-4.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const notify = () =>
    toast.success("Email отправлен! Спасибо!", {
      position: "bottom-right",
      theme: "dark",
    });
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <img src={logo} width={"180px"} height={"200px"} alt="" />
              <h3>Связаться с нами</h3>
              <h4>+7939393332</h4>
              <div className="socials">
                <a href="">
                  <img src={social1} width={"35px"} height={"40px"} alt="" />
                </a>
                <a href="">
                  <img src={social2} width={"40px"} height={"40px"} alt="" />
                </a>
                <a href="">
                  <img src={social3} alt="" width={"35px"} height={"40px"} />
                </a>
                <a href="">
                  <img src={social4} alt="" width={"40px"} height={"40px"} />
                </a>
              </div>
            </div>
            <div className="footer-right">
              <h1>Оставайтесь в курсе новостей и акций</h1>
              <Form className="forma">
                <Form.Control
                  className="pole1"
                  type="email"
                  placeholder="Введите Email"
                ></Form.Control>
                <Button variant="primary" className="knopka" onClick={notify}>
                  Отправить
                </Button>
                {/* <ToastContainer theme='dark' position='bottom-right'/> */}
              </Form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

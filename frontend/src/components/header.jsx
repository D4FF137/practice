import { Button, Nav, Navbar, Modal, Form } from "react-bootstrap";
import { publicRoutes } from "../config/routes";
import { Link } from "react-router-dom";
import userStore from "../../stores/userStore";
import { observer } from "mobx-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import bg from "../assets/media/background-video.mp4";
import { useEffect } from "react";
import logo from "../assets/media/logo.png";
import { Container } from "react-bootstrap";
import "../assets/style.css";
import { useState } from "react";

const Header = observer(() => {
  // для использования навигации
  const navigate = useNavigate();
  // для обработки выхода с аккаунта
  const logout = () => {
    userStore.logoutUser();
    navigate("/");
    toast.info("Вы вышли с аккаунта!");
  };
  // для переадресации на другую страницу
  const allinclusive = () => {
    navigate("/live");
  };
  // для открытия модального окна
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // для закрытия модального окна
  const handleCloseAlert = () => {
    toast.success("Заявка на бронирование успешно отправлена!", {
      position: "bottom-right",
      theme: "light",
    });
    setShow(false);
  };
  // для открытия модального окна
  const handleShow = () => setShow(true);

  return (
    <div className="main-screen-full">
      <video className="videoTag" autoPlay loop muted>
        <source src={bg} type="video/mp4"></source>
      </video>
      <section>
        {/* Навигационная панель */}
        <Navbar expand="lg" bg="" variant="" className="nav ">
          <div className="container">
            <Navbar.Brand>
              <img src={logo} alt="" width={"80px"} height={"100px"} />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="burger"
              className="text-black"
            ></Navbar.Toggle>
            <Navbar.Collapse id="burger">
              {/* {Для гостя} */}

              {userStore.isAuth ? (
                <Button
                  type="button"
                  variant="danger"
                  onClick={() => {
                    logout();
                  }}
                >
                  Выйти
                </Button>
              ) : (
                <Nav className="">
                  {publicRoutes.map((el, i) => (
                    <Nav.Link
                      className="text-white swit"
                      key={i}
                      to={el.path}
                      as={Link}
                    >
                      {el.name}
                    </Nav.Link>
                  ))}
                </Nav>
              )}
            </Navbar.Collapse>
          </div>{" "}
        </Navbar>
      </section>
      {/* Основной экран */}
      <section className="main-screen">
        <div className="container">
          <div className="main-screen-top text-white">
            <h1>
              Отдых и лечение <br />
              на берегу моря в Алуште
            </h1>
            <p>
              Программы оздоровления разработаны
              <br />и совершенствуются совместно с НИИ
              <br />
              имени И.М. Сеченова
            </p>
          </div>
          <div className="main-screen-buttons">
            <Button className="main-screen-button1" onClick={handleShow}>
              Забронировать номер
            </Button>
            <Modal className="bron" show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Оформить бронирование</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modalcontent">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ваш Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                    <Form.Label className="pt-3">Ваш номер телефона</Form.Label>
                    <Form.Control
                      type="phone"
                      placeholder="+7..."
                    ></Form.Control>
                    <Form.Label className="pt-3">Дата заезда</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="+7..."
                    ></Form.Control>
                    <Form.Label className="pt-3">Дата съезда</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="+7..."
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>
                      Пожелания по номеру и особенности бронирования
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Закрыть
                </Button>
                <Button variant="success" onClick={handleCloseAlert}>
                  Отправить
                </Button>
              </Modal.Footer>
            </Modal>
            <Button className="main-screen-button2" onClick={allinclusive}>
              Все включено
            </Button>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
});

export default Header;

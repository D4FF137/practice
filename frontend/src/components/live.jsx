import "../assets/style.css";
import { Button, Carousel, Row, Col, Modal, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import photo1 from "../assets/media/slider-photo-1.jpg";
import photo2 from "../assets/media/slider-photo-2.jpg";
import photo3 from "../assets/media/slider-photo-3.jpg";
import photo4 from "../assets/media/slider-photo-4.jpg";
import photo5 from "../assets/media/slider-photo-5.jpg";
import photo6 from "../assets/media/slider-photo-6.jpg";
import photo7 from "../assets/media/slider-photo-7.jpg";
import photo8 from "../assets/media/slider-photo-8.jpg";
import photo9 from "../assets/media/slider-photo-9.jpg";
import photo10 from "../assets/media/slider-photo-10.jpg";
import photo11 from "../assets/media/slider-photo-11.jpg";
import photo12 from "../assets/media/slider-photo-12.jpg";
import photo13 from "../assets/media/slider-photo-13.jpeg";
import photo14 from "../assets/media/slider-photo-14.jpeg";
import photo15 from "../assets/media/slider-photo-15.jpeg";
import photo16 from "../assets/media/slider-photo-16.jpeg";
import photo17 from "../assets/media/slider-photo-17.jpeg";
import photo18 from "../assets/media/slider-photo-18.jpeg";
import photo19 from "../assets/media/slider-photo-19.jpg";
import photo20 from "../assets/media/slider-photo-20.jpg";
import photo21 from "../assets/media/slider-photo-21.jpg";
import photo22 from "../assets/media/slider-photo-22.jpg";
import photo23 from "../assets/media/slider-photo-23.jpg";
import photo24 from "../assets/media/slider-photo-24.jpg";
import photo25 from "../assets/media/slider-photo-25.jpeg";
import photo26 from "../assets/media/slider-photo-26.jpeg";
import photo27 from "../assets/media/slider-photo-27.jpeg";
import photo28 from "../assets/media/slider-photo-28.jpg";
import photo29 from "../assets/media/slider-photo-29.jpg";
import photo30 from "../assets/media/slider-photo-30.jpg";

const Live = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseAlert = () => {
    toast.success("Заявка на бронирование успешно отправлена!", {
      position: "bottom-right",
      theme: "light",
    });
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container">
        <section className="live-section">
          <h1>Проживание</h1>
          <Button onClick={handleShow} variant="primary mb-4">
            Забронировать
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
                  <Form.Control type="phone" placeholder="+7..."></Form.Control>
                  <Form.Label className="pt-3">Дата заезда</Form.Label>
                  <Form.Control type="date" placeholder="+7..."></Form.Control>
                  <Form.Label className="pt-3">Дата съезда</Form.Label>
                  <Form.Control type="date" placeholder="+7..."></Form.Control>
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
          {/* <ToastContainer theme='light' position='bottom-right'/> */}
          <div className="buttons-container">
            <Button variant="transparent" className="live-btn">
              Все
            </Button>
            <Button className="live-btn" variant="transparent">
              Новые номера
            </Button>

            <Button className="live-btn" variant="transparent">
              Апартаменты
            </Button>
            <Button className="live-btn" variant="transparent">
              Эконом
            </Button>
            <Button className="live-btn" variant="transparent">
              Комфорт
            </Button>
          </div>
          <div className="cards">
            <Row>
              <Col className="lifecol live">
                <Carousel>
                  <Carousel.Item className="image">
                    <img src={photo1} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo2} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo3} text="First slide" />
                  </Carousel.Item>
                </Carousel>
                <h4>Двухкомнатный делюкс</h4>
                <h5>
                  от 3 760 Р<span>/ночь</span>
                </h5>
              </Col>
              <Col className="lifecol live">
                <Carousel>
                  <Carousel.Item className="image">
                    <img src={photo4} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo5} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo6} text="First slide" />
                  </Carousel.Item>
                </Carousel>
                <h4>Двухместный бизнес</h4>
                <h5>
                  от 3 760 Р<span>/ночь</span>
                </h5>
              </Col>
              <Col className="lifecol live">
                <Carousel>
                  <Carousel.Item className="image">
                    <img src={photo7} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo8} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo9} text="First slide" />
                  </Carousel.Item>
                </Carousel>
                <h4>Трехместный бизнес</h4>
                <h5>
                  от 3 760 Р<span>/ночь</span>
                </h5>
              </Col>
              <Col className="lifecol live">
                <Carousel>
                  <Carousel.Item className="image">
                    <img src={photo10} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo11} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo12} text="First slide" />
                  </Carousel.Item>
                </Carousel>
                <h4>Одноместный бизнес</h4>
                <h5>
                  от 4 800 Р<span>/ночь</span>
                </h5>
              </Col>
              <Col className="lifecol live">
                <Carousel>
                  <Carousel.Item className="image">
                    <img src={photo13} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo14} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo15} text="First slide" />
                  </Carousel.Item>
                </Carousel>
                <h4>
                  Однокомнатный номер
                  <br /> Фэмили
                </h4>
                <h5>
                  Все включено от 5 568 Р<span>/ночь</span>
                </h5>
              </Col>
              <Col className="lifecol live">
                <Carousel>
                  <Carousel.Item className="image">
                    <img src={photo16} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo17} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo18} text="First slide" />
                  </Carousel.Item>
                </Carousel>
                <h4>Делюкс Грин</h4>
                <h5>
                  от 9 480 Р<span>/ночь</span>
                </h5>
              </Col>
              <Col className="lifecol live">
                <Carousel>
                  <Carousel.Item className="image">
                    <img src={photo19} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo20} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo21} text="First slide" />
                  </Carousel.Item>
                </Carousel>
                <h4>Вилла Айвазовский</h4>
                <h5>
                  от 12 480 Р<span>/ночь</span>
                </h5>
              </Col>
              <Col className="lifecol live">
                <Carousel>
                  <Carousel.Item className="image">
                    <img src={photo22} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo23} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo24} text="First slide" />
                  </Carousel.Item>
                </Carousel>
                <h4>Апартаменты с кухней</h4>
                <h5>
                  от 15 280 Р<span>/ночь</span>
                </h5>
              </Col>
              <Col className="lifecol live">
                <Carousel>
                  <Carousel.Item className="image">
                    <img src={photo25} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo26} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo27} text="First slide" />
                  </Carousel.Item>
                </Carousel>
                <h4>
                  Одноместный номер
                  <br />
                  Эконом
                </h4>
                <h5>
                  от 3 760 Р<span>/ночь</span>
                </h5>
              </Col>
              <Col className="lifecol live">
                <Carousel>
                  <Carousel.Item className="image">
                    <img src={photo28} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo29} text="First slide" />
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo30} text="First slide" />
                  </Carousel.Item>
                </Carousel>
                <h4>
                  Одноместный номер
                  <br />
                  Комфорт
                </h4>
                <h5>
                  от 3 760 Р<span>/ночь</span>
                </h5>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    </>
  );
};

export default Live;

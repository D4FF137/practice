import { Container, Button, Row, Col, Carousel, Modal, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import about from "../assets/media/about.jpg";
import "../assets/style.css";
import photo1 from "../assets/media/slider-photo-1.jpg";
import photo2 from "../assets/media/slider-photo-2.jpg";
import photo3 from "../assets/media/slider-photo-3.jpg";
import photo4 from "../assets/media/slider-photo-4.jpg";
import photo5 from "../assets/media/slider-photo-5.jpg";
import photo6 from "../assets/media/slider-photo-6.jpg";
import photo7 from "../assets/media/slider-photo-7.jpg";
import photo8 from "../assets/media/slider-photo-8.jpg";
import photo9 from "../assets/media/slider-photo-9.jpg";
import promotion1 from '../assets/media/promotions-1.jpg';
import promotion2 from '../assets/media/promotions-2.jpg'
import promotion3 from '../assets/media/promotions-3.jpg'
import promotion4 from '../assets/media/promotions-4.jpg'
import advantages1 from '../assets/media/advantages-1.svg'
import advantages2 from '../assets/media/advantages-2.svg'
import advantages3 from '../assets/media/advantages-3.svg'
import advantages4 from '../assets/media/advantages-4.svg'
import advantages5 from '../assets/media/advantages-5.svg'
import advantages6 from '../assets/media/advantages-6.svg'
import telochka from '../assets/media/telochka.png'

import { useNavigate } from "react-router-dom";
import {useState} from 'react';



const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseAlert = () => {
    toast.success('Заявка на бронирование успешно отправлена!', {position: "bottom-right", theme:"light"});
    setShow(false);}
  const handleShow = () => setShow(true)
  const navigate = useNavigate();
const live_navigate = () =>{
  navigate('/live')
}

  return (
    <div>
      <div className="container">
        <section className="about">
          <div className="about-left">
            <h3>О санатории</h3>
            <h2>
              Санаторно-курортный <br />
              комплекс в живописной <br />
              Алуште, Крым
            </h2>
            <h3>
              Откройте для себя Славутич: идеальное сочетание <br />
              комфорта, удобства и высококлассного ухода
            </h3>
            <p>
              «Славутич» сочетает в себе уют и комфорт высококлассного отеля с
              превосходным медицинским обслуживанием, чтобы гарантировать
              незабываемый и здоровый отдых у моря.
            </p>
            <Button variant="primary">Подробнее</Button>
          </div>

          <div className="about-right">
            <img src={about} alt="" />
          </div>
        </section>

        <section className="life">
          <h1>Проживание</h1>
          <h2>Номера с лечением или без и несколько типов питания</h2>
          <Row className="buttons">
            <Col md={1}>
              <Button onClick={handleShow}>Забронировать</Button>
              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Оформить бронирование</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ваш Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
              <Form.Label className="pt-3">Ваш номер телефона</Form.Label>
              <Form.Control type="phone" placeholder="+7...">

              </Form.Control>
              <Form.Label className="pt-3">Дата заезда</Form.Label>
              <Form.Control type="date" placeholder="+7...">

              </Form.Control>
              <Form.Label className="pt-3">Дата съезда</Form.Label>
              <Form.Control type="date" placeholder="+7...">

              </Form.Control>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Пожелания по номеру и особенности бронирования</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleCloseAlert}>
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='light' position='bottom-right'/>
            </Col>
            <Col >
              <Button onClick={live_navigate}>Все номера</Button>
            </Col>
          </Row>
          <div className="cards">
            <Row>
              <Col className="lifecol">
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
                <h5>от 3 760 Р<span>/ночь</span></h5>
              </Col>
              <Col className="lifecol">
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
                <h5>от 3 760 Р<span>/ночь</span></h5>
              </Col>
              <Col className="lifecol">
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
                <h5>от 3 760 Р<span>/ночь</span></h5>
              </Col>
            </Row>
          </div>
        </section>
        <section className="promotions">
      <h1>Акции</h1>
      <h2>Позволят насладиться отдыхом и оздоровлением по привлекательным ценам</h2>
      <Row className="gap-4" md={2}>
        <Col  className="promotionscol">
        <img src={promotion1} alt="" />
    <h5>
      Новогодний банкет 2025
    </h5>
    <a href="">Подробнее</a>
        </Col>
        <Col className="promotionscol">
        <img src={promotion2} alt="" />
        <h5>
      Новые корпуса 10 и 11
    </h5>
    <a href="">Подробнее</a>
        </Col>
        <Col className="promotionscol">
        <img src={promotion3} alt="" />
        <h5>
      Выгодное межсезонье
    </h5>
    <a href="">Подробнее</a>
        </Col>
        <Col className="promotionscol">
       
      <img src={promotion4} alt="" />
        <h5>
      Скидка 50% на 2025 год
    </h5>
    <a href="">Подробнее</a>
        </Col>
      </Row>
        </section>
        {/* Преимущества */}
        <section className="advantages">
    <h1>Преимущества санатория</h1>
    <Row>
      <Col md={4}>
      <div className="advantages-column">
    <div className="advantages-column-left"><img src={advantages1} alt="" /></div>
    <div className="advantages-column-right">
      <h4>Лечение и медицина</h4>
      <p>Оздоровительные программы разрабатываются и совершенствуются в сотрудничестве с НИИ</p>
    </div>
    
      </div>
      </Col>
      <Col md={4}>
      <div className="advantages-column">
    <div className="advantages-column-left"><img src={advantages2} alt="" /></div>
    <div className="advantages-column-right">
      <h4>Бассейн с подогревом</h4>
      <p>Оснащен всем необходимым для приятного семейного отдыха </p>
    </div>
    
      </div>
      </Col>
      <Col md={4}>
      <div className="advantages-column">
    <div className="advantages-column-left"><img src={advantages3} alt="" /></div>
    <div className="advantages-column-right">
      <h4>Обширная территория</h4>
      <p>Целый реликтовый парк и множество троп для неспешных прогулок </p>
    </div>
    
      </div>
      </Col>
      <Col md={4}>
      <div className="advantages-column">
    <div className="advantages-column-left"><img src={advantages4} alt="" /></div>
    <div className="advantages-column-right">
      <h4>Развлечения и анимация</h4>
      <p>Концертные программы для родителей и увлекательная детская анимация </p>
    </div>
    
      </div>
      </Col>
      <Col md={4}>
      <div className="advantages-column">
    <div className="advantages-column-left"><img src={advantages5} alt="" /></div>
    <div className="advantages-column-right">
      <h4>Ежедневные экскурсии</h4>
      <p>Наши гости могут наслаждаться природой и достопримечательностями </p>
    </div>
    
      </div>
      </Col>
      <Col md={4}>
      <div className="advantages-column">
    <div className="advantages-column-left"><img src={advantages6} alt="" /></div>
    <div className="advantages-column-right">
      <h4>Трёхразовое питание</h4>
      <p> Разнообразное и здоровое питание, по системе “Шведский стол” </p>
    </div>
    
      </div>
      </Col>
    </Row>
        </section>
        <section className="promotions">
      <h1>Каждый найдет занятие по душе</h1>
      <h2>Позволят насладиться отдыхом и оздоровлением по привлекательным ценам</h2>
      <Row className="gap-4" md={2}>
        <Col  className="promotionscol tel">
        {/* <img src={promotion1} alt="" /> */}
    <h5>
      SPA зона
    </h5>
    <a href="">Подробнее</a>
        </Col>
        <Col className="promotionscol tem">

        <h5>
      Рестораны и бары 
    </h5>
    <a href="">Подробнее</a>
        </Col>
        <Col className="promotionscol ten">

        <h5>
      Лечение
    </h5>
    <a href="">Подробнее</a>
        </Col>
        <Col className="promotionscol ted">
       

        <h5>
      Развлечения для детей
    </h5>
    <a href="">Подробнее</a>
        </Col>
      </Row>
        </section>

      </div>
    </div>
  );
};

export default Home;
